import React, { useState, useMemo, useEffect } from 'react';
import { 
  irabSentences, 
  irabRules, 
  irabQuizQuestions, 
  builderData, 
  checkCombinationValidity, 
  generateFormalIrabString,
  IrabSentence,
  IrabWord,
  IrabRule
} from '../irabData';
import { 
  Search, BookOpen, Sparkles, HelpCircle, ChevronRight, ChevronLeft, 
  CheckCircle2, Bookmark, RotateCcw, Sliders, Award, 
  Check, X, Compass, Clipboard, Trash2, Save, FileText, AlertCircle, Info, Flame, Moon,
  Plus, Edit3
} from 'lucide-react';

export default function IrabView() {
  const [activeSubTab, setActiveSubTab] = useState<'analyzer' | 'builder' | 'handbook' | 'quiz'>('analyzer');
  
  // State for Sentence Analyzer
  const [sentences, setSentences] = useState<IrabSentence[]>(() => {
    try {
      const saved = localStorage.getItem('ubk_custom_irab_sentences');
      return saved ? JSON.parse(saved) : irabSentences;
    } catch (e) {
      return irabSentences;
    }
  });

  const [selectedSentenceId, setSelectedSentenceId] = useState<string>("1");
  const [selectedWordIndex, setSelectedWordIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [difficultyFilter, setDifficultyFilter] = useState<string>("Semua");

  // State to control sentence add/edit form
  const [showSentenceForm, setShowSentenceForm] = useState(false);
  const [formMode, setFormMode] = useState<'add' | 'edit'>('add');
  const [formSentenceId, setFormSentenceId] = useState("");
  const [formSentenceAr, setFormSentenceAr] = useState("");
  const [formSentenceIdText, setFormSentenceIdText] = useState("");
  const [formDescription, setFormDescription] = useState("");
  const [formDifficulty, setFormDifficulty] = useState<'Mudah' | 'Sedang' | 'Tinggi'>('Mudah');
  const [formCategory, setFormCategory] = useState("Jumlah Ismiyyah");
  const [formWords, setFormWords] = useState<IrabWord[]>([]);

  // State to control word edit/add inside sentence form
  const [editingWordIndex, setEditingWordIndex] = useState<number | null>(null);
  const [wordFormWord, setWordFormWord] = useState("");
  const [wordFormTransliteration, setWordFormTransliteration] = useState("");
  const [wordFormTranslation, setWordFormTranslation] = useState("");
  const [wordFormRole, setWordFormRole] = useState("");
  const [wordFormState, setWordFormState] = useState("");
  const [wordFormSign, setWordFormSign] = useState("");
  const [wordFormReason, setWordFormReason] = useState("");
  const [wordFormFormalAr, setWordFormFormalAr] = useState("");
  const [wordFormFormalId, setWordFormFormalId] = useState("");

  // Action Handlers for Sentence Form
  const handleAddNewSentenceClick = () => {
    setFormMode('add');
    setFormSentenceId("");
    setFormSentenceAr("");
    setFormSentenceIdText("");
    setFormDescription("");
    setFormDifficulty('Mudah');
    setFormCategory("Jumlah Ismiyyah");
    setFormWords([]);
    setEditingWordIndex(null);
    setShowSentenceForm(true);
    playInteractiveChime('click');
  };

  const handleEditSentenceClick = () => {
    const activeSentence = sentences.find(s => s.id === selectedSentenceId) || sentences[0] || irabSentences[0];
    if (!activeSentence) return;
    setFormMode('edit');
    setFormSentenceId(activeSentence.id);
    setFormSentenceAr(activeSentence.sentenceAr);
    setFormSentenceIdText(activeSentence.sentenceId);
    setFormDescription(activeSentence.description);
    setFormDifficulty(activeSentence.difficulty);
    setFormCategory(activeSentence.category);
    setFormWords([...activeSentence.words]);
    setEditingWordIndex(null);
    setShowSentenceForm(true);
    playInteractiveChime('click');
  };

  const handleStartAddWord = () => {
    setEditingWordIndex(-1);
    setWordFormWord("");
    setWordFormTransliteration("");
    setWordFormTranslation("");
    setWordFormRole("");
    setWordFormState("");
    setWordFormSign("");
    setWordFormReason("");
    setWordFormFormalAr("");
    setWordFormFormalId("");
    playInteractiveChime('click');
  };

  const handleStartEditWord = (idx: number) => {
    const word = formWords[idx];
    if (!word) return;
    setEditingWordIndex(idx);
    setWordFormWord(word.word);
    setWordFormTransliteration(word.transliteration);
    setWordFormTranslation(word.translation);
    setWordFormRole(word.role);
    setWordFormState(word.state);
    setWordFormSign(word.sign);
    setWordFormReason(word.reason);
    setWordFormFormalAr(word.formalAr);
    setWordFormFormalId(word.formalId);
    playInteractiveChime('click');
  };

  const handleRemoveWord = (idx: number) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus kata ini dari analisis kalimat?")) {
      const updated = formWords.filter((_, i) => i !== idx);
      setFormWords(updated);
      playInteractiveChime('error');
    }
  };

  const handleSaveWordForm = () => {
    if (!wordFormWord.trim()) {
      alert("Masukkan lafadz kata Arab!");
      return;
    }
    const newWord: IrabWord = {
      word: wordFormWord.trim(),
      transliteration: wordFormTransliteration.trim(),
      translation: wordFormTranslation.trim(),
      role: wordFormRole.trim(),
      state: wordFormState.trim(),
      sign: wordFormSign.trim(),
      reason: wordFormReason.trim(),
      formalAr: wordFormFormalAr.trim(),
      formalId: wordFormFormalId.trim()
    };

    if (editingWordIndex === -1) {
      setFormWords([...formWords, newWord]);
    } else if (editingWordIndex !== null) {
      const updated = [...formWords];
      updated[editingWordIndex] = newWord;
      setFormWords(updated);
    }
    setEditingWordIndex(null);
    playInteractiveChime('success');
  };

  const handleSaveSentence = () => {
    if (!formSentenceAr.trim()) {
      alert("Masukkan lafadz kalimat Arab!");
      return;
    }
    if (!formSentenceIdText.trim()) {
      alert("Masukkan arti kalimat!");
      return;
    }
    if (formWords.length === 0) {
      alert("Kalimat harus memiliki minimal 1 analisis kata!");
      return;
    }

    let updatedSentences = [...sentences];
    if (formMode === 'add') {
      const newId = (sentences.length > 0 ? Math.max(...sentences.map(s => parseInt(s.id) || 0)) + 1 : 1).toString();
      const newSentence: IrabSentence = {
        id: newId,
        sentenceAr: formSentenceAr.trim(),
        sentenceId: formSentenceIdText.trim(),
        description: formDescription.trim(),
        difficulty: formDifficulty,
        category: formCategory.trim(),
        words: formWords
      };
      updatedSentences = [...updatedSentences, newSentence];
      setSelectedSentenceId(newId);
    } else {
      updatedSentences = sentences.map(s => {
        if (s.id === formSentenceId) {
          return {
            ...s,
            sentenceAr: formSentenceAr.trim(),
            sentenceId: formSentenceIdText.trim(),
            description: formDescription.trim(),
            difficulty: formDifficulty,
            category: formCategory.trim(),
            words: formWords
          };
        }
        return s;
      });
    }

    setSentences(updatedSentences);
    localStorage.setItem('ubk_custom_irab_sentences', JSON.stringify(updatedSentences));
    setShowSentenceForm(false);
    setSelectedWordIndex(0);
    playInteractiveChime('success');
    alert("Kalimat berhasil disimpan!");
  };

  const handleDeleteSentenceClick = () => {
    const activeSentence = sentences.find(s => s.id === selectedSentenceId) || sentences[0] || irabSentences[0];
    if (!activeSentence) return;
    if (window.confirm(`Apakah Anda yakin ingin menghapus kalimat "${activeSentence.sentenceId}"? Semua analisis kata di dalamnya akan hilang.`)) {
      const remaining = sentences.filter(s => s.id !== activeSentence.id);
      setSentences(remaining);
      localStorage.setItem('ubk_custom_irab_sentences', JSON.stringify(remaining));
      
      if (remaining.length > 0) {
        setSelectedSentenceId(remaining[0].id);
      } else {
        setSelectedSentenceId("");
      }
      setSelectedWordIndex(0);
      playInteractiveChime('error');
    }
  };

  // State for Builder / Calculator
  const [builderWordAr, setBuilderWordAr] = useState("");
  const [builderWordId, setBuilderWordId] = useState("");
  const [selectedWordType, setSelectedWordType] = useState("mufrad");
  const [selectedState, setSelectedState] = useState("marfu");
  const [selectedRole, setSelectedRole] = useState("mubtada");
  const [selectedSign, setSelectedSign] = useState("dhommah_zhahirah");
  const [savedIrabs, setSavedIrabs] = useState<{ id: string; arabic: string; indonesian: string; word: string }[]>(() => {
    try {
      const saved = localStorage.getItem('ubk_saved_irabs');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // State for Rules Handbook with CRUD
  const [rules, setRules] = useState<IrabRule[]>(() => {
    try {
      const saved = localStorage.getItem('ubk_custom_irab_rules');
      return saved ? JSON.parse(saved) : irabRules;
    } catch (e) {
      return irabRules;
    }
  });

  const [rulesFilter, setRulesFilter] = useState<'All' | 'Marfu' | 'Mansub' | 'Majrur' | 'Majzum'>('All');

  // Form states for Rule
  const [showRuleForm, setShowRuleForm] = useState(false);
  const [ruleFormMode, setRuleFormMode] = useState<'add' | 'edit'>('add');
  const [editingRuleId, setEditingRuleId] = useState<string | null>(null);

  const [ruleFormState, setRuleFormState] = useState<'Marfu' | 'Mansub' | 'Majrur' | 'Majzum'>('Marfu');
  const [ruleFormNameAr, setRuleFormNameAr] = useState("");
  const [ruleFormNameId, setRuleFormNameId] = useState("");
  const [ruleFormSignAr, setRuleFormSignAr] = useState("");
  const [ruleFormSignId, setRuleFormSignId] = useState("");
  const [ruleFormExampleAr, setRuleFormExampleAr] = useState("");
  const [ruleFormExampleId, setRuleFormExampleId] = useState("");
  const [ruleFormExplanation, setRuleFormExplanation] = useState("");
  const [ruleFormApplicableTo, setRuleFormApplicableTo] = useState("");

  const handleOpenAddRule = () => {
    setRuleFormMode('add');
    setEditingRuleId(null);
    setRuleFormState('Marfu');
    setRuleFormNameAr("");
    setRuleFormNameId("");
    setRuleFormSignAr("");
    setRuleFormSignId("");
    setRuleFormExampleAr("");
    setRuleFormExampleId("");
    setRuleFormExplanation("");
    setRuleFormApplicableTo("");
    setShowRuleForm(true);
    playInteractiveChime('click');
  };

  const handleOpenEditRule = (rule: IrabRule) => {
    setRuleFormMode('edit');
    setEditingRuleId(rule.id);
    setRuleFormState(rule.state);
    setRuleFormNameAr(rule.nameAr);
    setRuleFormNameId(rule.nameId);
    setRuleFormSignAr(rule.signAr);
    setRuleFormSignId(rule.signId);
    setRuleFormExampleAr(rule.exampleAr);
    setRuleFormExampleId(rule.exampleId);
    setRuleFormExplanation(rule.explanation);
    setRuleFormApplicableTo(rule.applicableTo);
    setShowRuleForm(true);
    playInteractiveChime('click');
  };

  const handleDeleteRule = (id: string) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus kaidah i'rab ini?")) {
      const updatedRules = rules.filter(r => r.id !== id);
      setRules(updatedRules);
      localStorage.setItem('ubk_custom_irab_rules', JSON.stringify(updatedRules));
      playInteractiveChime('error');
    }
  };

  const handleResetRules = () => {
    if (window.confirm("Apakah Anda yakin ingin menyetel ulang semua kaidah i'rab kembali ke bawaan sistem?")) {
      setRules(irabRules);
      localStorage.setItem('ubk_custom_irab_rules', JSON.stringify(irabRules));
      playInteractiveChime('success');
    }
  };

  const handleSaveRule = () => {
    if (!ruleFormNameAr.trim() || !ruleFormNameId.trim()) {
      alert("Nama kaidah (Arab & Indonesia) wajib diisi!");
      return;
    }

    let updatedRules = [...rules];
    if (ruleFormMode === 'add') {
      const newId = 'custom_r_' + Date.now();
      const newRule: IrabRule = {
        id: newId,
        state: ruleFormState,
        nameAr: ruleFormNameAr.trim(),
        nameId: ruleFormNameId.trim(),
        signAr: ruleFormSignAr.trim() || "-",
        signId: ruleFormSignId.trim() || "-",
        exampleAr: ruleFormExampleAr.trim() || "-",
        exampleId: ruleFormExampleId.trim() || "-",
        explanation: ruleFormExplanation.trim() || "-",
        applicableTo: ruleFormApplicableTo.trim() || "Semua Isim"
      };
      updatedRules = [...updatedRules, newRule];
    } else {
      updatedRules = rules.map(r => {
        if (r.id === editingRuleId) {
          return {
            ...r,
            state: ruleFormState,
            nameAr: ruleFormNameAr.trim(),
            nameId: ruleFormNameId.trim(),
            signAr: ruleFormSignAr.trim() || "-",
            signId: ruleFormSignId.trim() || "-",
            exampleAr: ruleFormExampleAr.trim() || "-",
            exampleId: ruleFormExampleId.trim() || "-",
            explanation: ruleFormExplanation.trim() || "-",
            applicableTo: ruleFormApplicableTo.trim() || "Semua Isim"
          };
        }
        return r;
      });
    }

    setRules(updatedRules);
    localStorage.setItem('ubk_custom_irab_rules', JSON.stringify(updatedRules));
    setShowRuleForm(false);
    playInteractiveChime('success');
    alert("Kaidah berhasil disimpan!");
  };

  // State for Quiz
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [wrongAnswers, setWrongAnswers] = useState<{ questionId: number; userAnswer: string; correctAnswer: string }[]>([]);

  // Sound Synth Mockup for feedback (Disabled per user request)
  const playInteractiveChime = (type: 'success' | 'error' | 'click') => {
    // Audio feedback disabled per user request
  };

  // Filter sentences
  const filteredSentences = useMemo(() => {
    return sentences.filter(s => {
      const matchSearch = 
        s.sentenceAr.includes(searchQuery) ||
        s.sentenceId.toLowerCase().includes(searchQuery.toLowerCase());
      const matchDiff = difficultyFilter === "Semua" || s.difficulty === difficultyFilter;
      return matchSearch && matchDiff;
    });
  }, [sentences, searchQuery, difficultyFilter]);

  // Selected Sentence
  const selectedSentence = useMemo(() => {
    return sentences.find(s => s.id === selectedSentenceId) || sentences[0] || irabSentences[0];
  }, [sentences, selectedSentenceId]);

  // Handle word selection
  const handleSelectWord = (idx: number) => {
    setSelectedWordIndex(idx);
    playInteractiveChime('click');
  };

  // Dynamically filter available roles based on selected state in Builder
  const filteredRoles = useMemo(() => {
    return builderData.roles.filter(r => r.state === selectedState);
  }, [selectedState]);

  // Dynamically filter available signs based on selected state in Builder
  const filteredSigns = useMemo(() => {
    return builderData.signs.filter(s => s.state.includes(selectedState));
  }, [selectedState]);

  // Auto-set first valid role and sign when state changes in builder
  useEffect(() => {
    if (filteredRoles.length > 0) {
      setSelectedRole(filteredRoles[0].id);
    }
    if (filteredSigns.length > 0) {
      setSelectedSign(filteredSigns[0].id);
    }
  }, [selectedState, filteredRoles, filteredSigns]);

  // Calculate validation in builder
  const validationResult = useMemo(() => {
    return checkCombinationValidity(selectedWordType, selectedState, selectedSign);
  }, [selectedWordType, selectedState, selectedSign]);

  // Generated formal I'rab string in Builder
  const generatedIrab = useMemo(() => {
    const wordTypeObj = builderData.wordTypes.find(w => w.id === selectedWordType);
    const stateObj = builderData.states.find(s => s.id === selectedState);
    const roleObj = builderData.roles.find(r => r.id === selectedRole);
    const signObj = builderData.signs.find(s => s.id === selectedSign);

    if (!wordTypeObj || !stateObj || !roleObj || !signObj) {
      return { arabic: "", indonesian: "" };
    }

    return generateFormalIrabString({
      wordAr: builderWordAr.trim() || "(Sebut Kata)",
      roleAr: roleObj.arabic,
      stateAr: stateObj.arabic,
      signAr: signObj.arabic,
      reasonAr: wordTypeObj.arabic
    });
  }, [builderWordAr, selectedWordType, selectedState, selectedRole, selectedSign]);

  // Save built I'rab to list
  const handleSaveBuiltIrab = () => {
    if (!builderWordAr.trim()) {
      alert("Masukkan kosa kata Arab terlebih dahulu!");
      return;
    }
    if (!validationResult.isValid) {
      alert("Kaidah I'rab Anda belum valid! Harap sesuaikan dengan rekomendasi.");
      return;
    }

    const newItem = {
      id: Date.now().toString(),
      word: builderWordAr,
      arabic: generatedIrab.arabic,
      indonesian: generatedIrab.indonesian
    };
    const updated = [newItem, ...savedIrabs];
    setSavedIrabs(updated);
    localStorage.setItem('ubk_saved_irabs', JSON.stringify(updated));
    playInteractiveChime('success');
    
    // Reset word inputs
    setBuilderWordAr("");
    setBuilderWordId("");
    alert("I'rab berhasil disimpan ke daftar analisis Anda!");
  };

  // Delete saved I'rab
  const handleDeleteSavedIrab = (id: string) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus analisis ini?")) {
      const updated = savedIrabs.filter(i => i.id !== id);
      setSavedIrabs(updated);
      localStorage.setItem('ubk_saved_irabs', JSON.stringify(updated));
      playInteractiveChime('error');
    }
  };

  // Handbook rules filter
  const filteredRules = useMemo(() => {
    if (rulesFilter === 'All') return rules;
    return rules.filter(r => r.state === rulesFilter);
  }, [rules, rulesFilter]);

  // Quiz calculations
  const currentQuestion = irabQuizQuestions[currentQuestionIndex];

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizCompleted(false);
    setWrongAnswers([]);
    playInteractiveChime('click');
  };

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedOptionIndex(idx);
    playInteractiveChime('click');
  };

  const handleSubmitAnswer = () => {
    if (selectedOptionIndex === null || isAnswerSubmitted) return;

    setIsAnswerSubmitted(true);
    const isCorrect = selectedOptionIndex === currentQuestion.correctAnswerIndex;
    if (isCorrect) {
      setScore(s => s + 1);
      playInteractiveChime('success');
    } else {
      playInteractiveChime('error');
      setWrongAnswers(prev => [
        ...prev,
        {
          questionId: currentQuestion.id,
          userAnswer: currentQuestion.options[selectedOptionIndex],
          correctAnswer: currentQuestion.options[currentQuestion.correctAnswerIndex]
        }
      ]);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < irabQuizQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOptionIndex(null);
      setIsAnswerSubmitted(false);
      playInteractiveChime('click');
    } else {
      setQuizCompleted(true);
      playInteractiveChime('success');
    }
  };

  return (
    <div className="space-y-6">
      
      {/* ================= HEADER BANNER ================= */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-800 via-teal-700 to-slate-900 text-white p-6 sm:p-8 shadow-xl border border-amber-500/20">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400 rounded-full filter blur-3xl opacity-10 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400 rounded-full filter blur-3xl opacity-10 -ml-20 -mb-20"></div>
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 text-xs px-3 py-1 rounded-full border border-amber-400/20 uppercase tracking-widest font-bold">
              <Sparkles className="w-4 h-4 text-amber-300 animate-pulse" />
              <span>Sistem Interaktif Silsilah LIPIA</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-yellow-200 to-white">
              Laboratorium I'rab Nahwu Interaktif
            </h1>
            <p className="text-sm sm:text-base text-teal-100 max-w-2xl leading-relaxed">
              Kuasai perubahan harakat akhir kata bahasa Arab secara presisi dan sistematis. Analisis kalimat lengkap, susun formula hukum i'rab Anda sendiri, dan uji pemahaman Anda di sini.
            </p>
          </div>
          
          <div className="bg-slate-950/50 border border-amber-400/30 p-4 rounded-2xl flex flex-col items-center justify-center text-center shrink-0 min-w-[160px] shadow-md">
            <Award className="w-10 h-10 text-yellow-400 mb-1" />
            <span className="text-[10px] text-amber-200 uppercase tracking-widest font-bold">I'rab Mandiri</span>
            <span className="text-2xl font-black text-white">{savedIrabs.length} <span className="text-xs text-slate-300">Disimpan</span></span>
          </div>
        </div>
      </div>

      {/* ================= PRIMARY NAVIGATION BUTTONS ================= */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-slate-950/60 p-2 rounded-2xl border border-slate-900">
        <button
          onClick={() => { setActiveSubTab('analyzer'); playInteractiveChime('click'); }}
          className={`flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
            activeSubTab === 'analyzer'
              ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-extrabold shadow border border-amber-400/40'
              : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Analisis Kalimat</span>
        </button>

        <button
          onClick={() => { setActiveSubTab('builder'); playInteractiveChime('click'); }}
          className={`flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
            activeSubTab === 'builder'
              ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-extrabold shadow border border-amber-400/40'
              : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>Calculator I'rab</span>
        </button>

        <button
          onClick={() => { setActiveSubTab('handbook'); playInteractiveChime('click'); }}
          className={`flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
            activeSubTab === 'handbook'
              ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-extrabold shadow border border-amber-400/40'
              : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Kamus Kaidah</span>
        </button>

        <button
          onClick={() => { setActiveSubTab('quiz'); playInteractiveChime('click'); }}
          className={`flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
            activeSubTab === 'quiz'
              ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-slate-950 font-extrabold shadow border border-amber-400/40'
              : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>Ujian I'rab ({irabQuizQuestions.length})</span>
        </button>
      </div>


      {/* ==========================================================================
         SUB-TAB 1: WORD-BY-WORD INTERACTIVE SENTENCE ANALYZER
         ========================================================================== */}
      {activeSubTab === 'analyzer' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left panel: Sentence Catalog */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Search & Filter bar */}
            <div className="bg-slate-950/50 p-4 rounded-2xl border border-slate-900 space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold uppercase text-amber-500 tracking-wider">Cari & Pilih Kalimat</span>
                <button
                  onClick={handleAddNewSentenceClick}
                  className="flex items-center gap-1 bg-amber-500 hover:bg-amber-400 text-slate-950 px-2 py-1 rounded-lg text-[10px] font-black uppercase transition cursor-pointer"
                >
                  <Plus className="w-3 h-3" />
                  <span>Tambah Kalimat</span>
                </button>
              </div>
              
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-3.5 w-3.5 text-slate-400" />
                </span>
                <input
                  type="text"
                  placeholder="Cari kata arab atau terjemahan..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500 text-slate-100"
                />
              </div>

              <div className="flex gap-1.5 pt-1">
                {["Semua", "Mudah", "Sedang", "Tinggi"].map((diff) => (
                  <button
                    key={diff}
                    onClick={() => { setDifficultyFilter(diff); playInteractiveChime('click'); }}
                    className={`text-[10px] px-2.5 py-1 rounded-full border transition cursor-pointer ${
                      difficultyFilter === diff 
                        ? "bg-amber-500/20 text-amber-400 border-amber-500/40" 
                        : "bg-slate-900 text-slate-400 border-slate-800"
                    }`}
                  >
                    {diff}
                  </button>
                ))}
              </div>
            </div>

            {/* Catalog List */}
            <div className="space-y-2.5 max-h-[460px] overflow-y-auto pr-1">
              {filteredSentences.map((s) => (
                <div
                  key={s.id}
                  onClick={() => {
                    setSelectedSentenceId(s.id);
                    setSelectedWordIndex(0);
                    playInteractiveChime('click');
                  }}
                  className={`p-4 rounded-xl border transition-all cursor-pointer ${
                    selectedSentenceId === s.id
                      ? 'bg-emerald-950/40 border-emerald-500/40 shadow-inner'
                      : 'bg-slate-950/60 border-slate-900 hover:border-slate-800 hover:bg-slate-900/40'
                  }`}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[9px] bg-slate-900 text-amber-500 px-1.5 py-0.5 rounded font-bold">ID: {s.id}</span>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                      s.difficulty === 'Mudah' ? 'bg-green-950 text-green-400' :
                      s.difficulty === 'Sedang' ? 'bg-yellow-950 text-yellow-400' :
                      'bg-red-950 text-red-400'
                    }`}>{s.difficulty}</span>
                  </div>

                  <div className="text-right mb-1">
                    <p dir="rtl" className="text-lg font-amiri text-emerald-300 leading-normal font-semibold">
                      {s.sentenceAr}
                    </p>
                  </div>
                  <p className="text-xs text-slate-300 font-medium line-clamp-1">{s.sentenceId}</p>
                  <p className="text-[10px] text-slate-500 mt-1 line-clamp-1 italic">{s.description}</p>
                </div>
              ))}
              {filteredSentences.length === 0 && (
                <div className="text-center py-8 text-xs text-slate-500">Tidak ada kalimat yang cocok.</div>
              )}
            </div>

          </div>

          {/* Right panel: Active Sentence Analyzer OR Sentence Form */}
          <div className="lg:col-span-7 space-y-6">
            {showSentenceForm ? (
              <div className="bg-slate-950/80 rounded-2xl border border-amber-500/20 p-5 sm:p-6 space-y-6 shadow-xl">
                {/* Form Header */}
                <div className="flex justify-between items-center border-b border-slate-900 pb-3">
                  <div className="flex items-center gap-2">
                    <Sliders className="w-5 h-5 text-amber-500" />
                    <div>
                      <h3 className="text-sm font-black text-slate-100 uppercase">
                        {formMode === 'add' ? 'Tambah Kalimat Baru' : 'Ubah Kalimat'}
                      </h3>
                      <p className="text-[10px] text-slate-400">
                        {formMode === 'add' ? 'Tambahkan kalimat baru ke catalog beserta rincian i\'rab kata.' : 'Modifikasi kalimat dan rincian i\'rab masing-masing kata.'}
                      </p>
                    </div>
                  </div>
                  <button 
                    onClick={() => { setShowSentenceForm(false); playInteractiveChime('click'); }}
                    className="p-1.5 hover:bg-slate-900 text-slate-400 hover:text-white rounded-lg transition"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Main Fields */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Lafadz Kalimat Lengkap (Arab)</label>
                      <input
                        type="text"
                        placeholder="Contoh: الْعِلْمُ نُورٌ"
                        value={formSentenceAr}
                        onChange={(e) => setFormSentenceAr(e.target.value)}
                        dir="rtl"
                        className="block w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-lg text-emerald-300 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Arti Kalimat Lengkap</label>
                      <input
                        type="text"
                        placeholder="Contoh: Ilmu adalah cahaya."
                        value={formSentenceIdText}
                        onChange={(e) => setFormSentenceIdText(e.target.value)}
                        className="block w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Tingkat Kesulitan</label>
                      <select
                        value={formDifficulty}
                        onChange={(e) => setFormDifficulty(e.target.value as any)}
                        className="block w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      >
                        <option value="Mudah">Mudah</option>
                        <option value="Sedang">Sedang</option>
                        <option value="Tinggi">Tinggi</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Kategori</label>
                      <input
                        type="text"
                        placeholder="Contoh: Jumlah Ismiyyah"
                        value={formCategory}
                        onChange={(e) => setFormCategory(e.target.value)}
                        className="block w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Deskripsi Singkat</label>
                    <textarea
                      placeholder="Tulis penjelasan singkat mengenai kaidah nahwu kalimat ini..."
                      value={formDescription}
                      onChange={(e) => setFormDescription(e.target.value)}
                      rows={2}
                      className="block w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500"
                    />
                  </div>
                </div>

                {/* Words Editor Section */}
                <div className="border-t border-slate-900 pt-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Analisis Kata demi Kata ({formWords.length})</span>
                    <button
                      type="button"
                      onClick={handleStartAddWord}
                      className="flex items-center gap-1 bg-emerald-800 hover:bg-emerald-700 text-white px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase transition"
                    >
                      <Plus className="w-3 h-3" />
                      <span>Tambah Kata</span>
                    </button>
                  </div>

                  {/* Words List */}
                  <div className="space-y-2">
                    {formWords.map((word, wIdx) => (
                      <div key={wIdx} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 flex justify-between items-center gap-3">
                        <div className="flex items-center gap-3">
                          <span className="w-5 h-5 rounded-md bg-slate-950 text-slate-400 text-[10px] font-bold flex items-center justify-center">
                            {wIdx + 1}
                          </span>
                          <div>
                            <strong className="text-sm text-emerald-300 font-amiri font-bold">{word.word}</strong>
                            <span className="text-[10px] text-slate-400 ml-2">({word.translation})</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => handleStartEditWord(wIdx)}
                            className="p-1.5 bg-slate-950 hover:bg-slate-850 text-amber-400 border border-slate-800 rounded-lg transition"
                          >
                            <Edit3 className="w-3 h-3" />
                          </button>
                          <button
                            type="button"
                            onClick={() => handleRemoveWord(wIdx)}
                            className="p-1.5 bg-red-950/30 hover:bg-red-900/40 text-red-400 border border-red-900/20 rounded-lg transition"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    ))}

                    {formWords.length === 0 && (
                      <div className="text-center py-4 text-xs text-slate-500 italic">Belum ada analisis kata. Ketuk "Tambah Kata" di atas.</div>
                    )}
                  </div>

                  {/* Word Detail Editor Sub-Form */}
                  {editingWordIndex !== null && (
                    <div className="bg-slate-900/40 p-4 rounded-xl border border-amber-500/10 space-y-4">
                      <div className="flex justify-between items-center border-b border-slate-950 pb-2">
                        <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider block">
                          {editingWordIndex === -1 ? 'Tambah Kata Baru' : `Edit Kata #${editingWordIndex + 1}`}
                        </span>
                        <button 
                          type="button"
                          onClick={() => setEditingWordIndex(null)}
                          className="text-slate-500 hover:text-slate-300"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-slate-400 uppercase">Lafadz Kata (Arab)</label>
                          <input
                            type="text"
                            placeholder="Contoh: الْعِلْمُ"
                            value={wordFormWord}
                            onChange={(e) => setWordFormWord(e.target.value)}
                            dir="rtl"
                            className="block w-full px-2 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-emerald-300 placeholder-slate-600 focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-slate-400 uppercase">Transliterasi</label>
                          <input
                            type="text"
                            placeholder="Al-'Ilmu"
                            value={wordFormTransliteration}
                            onChange={(e) => setWordFormTransliteration(e.target.value)}
                            className="block w-full px-2 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-600 focus:outline-none"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-slate-400 uppercase">Arti Kata</label>
                          <input
                            type="text"
                            placeholder="ilmu itu"
                            value={wordFormTranslation}
                            onChange={(e) => setWordFormTranslation(e.target.value)}
                            className="block w-full px-2 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-600 focus:outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-slate-400 uppercase">Kedudukan (Role)</label>
                          <input
                            type="text"
                            placeholder="Mubtada' (Subjek)"
                            value={wordFormRole}
                            onChange={(e) => setWordFormRole(e.target.value)}
                            className="block w-full px-2 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-600"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-slate-400 uppercase">Hukum I'rab (State)</label>
                          <input
                            type="text"
                            placeholder="Marfu'"
                            value={wordFormState}
                            onChange={(e) => setWordFormState(e.target.value)}
                            className="block w-full px-2 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-600"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-slate-400 uppercase">Tanda I'rab (Sign)</label>
                          <input
                            type="text"
                            placeholder="Dhommah Zhahirah"
                            value={wordFormSign}
                            onChange={(e) => setWordFormSign(e.target.value)}
                            className="block w-full px-2 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-600"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[9px] font-bold text-slate-400 uppercase">Alasan (Reason)</label>
                          <input
                            type="text"
                            placeholder="Isim Mufrad"
                            value={wordFormReason}
                            onChange={(e) => setWordFormReason(e.target.value)}
                            className="block w-full px-2 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-600"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] font-bold text-slate-400 uppercase">Penjelasan I'rab Resmi Arab (العِبَارَةُ النَّحْوِيَّةُ)</label>
                        <input
                          type="text"
                          placeholder="مُبْتَدَأٌ مَرْفُوْعٌ وَعَلَامَةُ رَفْعِهِ الضَّمَّةُ..."
                          value={wordFormFormalAr}
                          onChange={(e) => setWordFormFormalAr(e.target.value)}
                          dir="rtl"
                          className="block w-full px-2 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-emerald-200 placeholder-slate-600 focus:outline-none"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="text-[9px] font-bold text-slate-400 uppercase">Penjelasan I'rab Resmi Indonesia</label>
                        <input
                          type="text"
                          placeholder="Mubtada' marfu' dengan tanda rafa' dhommah..."
                          value={wordFormFormalId}
                          onChange={(e) => setWordFormFormalId(e.target.value)}
                          className="block w-full px-2 py-1.5 bg-slate-950 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-600"
                        />
                      </div>

                      <div className="flex gap-2 justify-end pt-1">
                        <button
                          type="button"
                          onClick={() => setEditingWordIndex(null)}
                          className="px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-850 text-slate-400 text-[10px] font-bold uppercase transition"
                        >
                          Batal
                        </button>
                        <button
                          type="button"
                          onClick={handleSaveWordForm}
                          className="px-3 py-1.5 rounded-lg bg-amber-500 text-slate-950 text-[10px] font-black uppercase transition shadow-sm"
                        >
                          Simpan Kata
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Form Action Buttons */}
                <div className="border-t border-slate-900 pt-4 flex gap-3 justify-end">
                  <button
                    type="button"
                    onClick={() => { setShowSentenceForm(false); playInteractiveChime('click'); }}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-800 text-xs font-bold uppercase rounded-xl transition cursor-pointer"
                  >
                    Batal
                  </button>
                  <button
                    type="button"
                    onClick={handleSaveSentence}
                    className="px-5 py-2 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 text-xs font-black uppercase rounded-xl border border-amber-400 transition cursor-pointer shadow-md"
                  >
                    Simpan Kalimat
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Visual Board */}
                <div className="bg-[#0B132B] rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-inner text-center space-y-6">
                  
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-900 pb-3">
                    <div className="inline-flex items-center gap-1.5 bg-slate-900 text-slate-400 text-[10px] px-3 py-1 rounded-full border border-slate-800">
                      <Compass className="w-3.5 h-3.5 text-amber-500 animate-spin-slow" />
                      <span>Ketuk kata di bawah untuk membedah I'rab</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={handleEditSentenceClick}
                        className="flex items-center gap-1 bg-slate-900 hover:bg-slate-800 text-amber-400 border border-slate-800 hover:border-amber-500/20 px-2.5 py-1.5 rounded-xl text-[10px] font-bold uppercase transition cursor-pointer"
                        title="Ubah kalimat ini beserta i'rab kata"
                      >
                        <Edit3 className="w-3 h-3" />
                        <span>Ubah</span>
                      </button>
                      <button
                        onClick={handleDeleteSentenceClick}
                        className="flex items-center gap-1 bg-red-950/40 hover:bg-red-900/40 text-red-400 border border-red-900/20 px-2.5 py-1.5 rounded-xl text-[10px] font-bold uppercase transition cursor-pointer"
                        title="Hapus kalimat ini dari sistem"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Hapus</span>
                      </button>
                    </div>
                  </div>

                  {/* Large clickable Arab Text */}
                  <div className="flex flex-wrap flex-row-reverse justify-center items-center gap-4 sm:gap-6 py-4">
                    {selectedSentence?.words?.map((w, index) => {
                      const isWordSelected = selectedWordIndex === index;
                      return (
                        <button
                          key={index}
                          onClick={() => handleSelectWord(index)}
                          className={`px-4 py-2 sm:px-6 sm:py-3.5 rounded-2xl text-2xl sm:text-3xl font-semibold font-amiri transition-all duration-300 border-2 cursor-pointer ${
                            isWordSelected
                              ? "bg-amber-500 text-slate-950 border-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.35)] scale-[1.08] font-bold"
                              : "bg-slate-900/60 text-emerald-200 border-slate-800 hover:border-emerald-600/40 hover:bg-slate-900"
                          }`}
                        >
                          {w.word}
                        </button>
                      );
                    })}
                  </div>

                  {/* Translation bar */}
                  <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-900 text-center text-xs text-slate-300">
                    <span className="text-[10px] text-slate-500 font-mono block uppercase">Arti Kalimat</span>
                    <strong className="text-sm font-sans text-white">"{selectedSentence?.sentenceId}"</strong>
                  </div>

                </div>

                {/* Detailed Word Analysis */}
                {selectedWordIndex !== null && selectedSentence?.words?.[selectedWordIndex] && (
                  (() => {
                    const w = selectedSentence.words[selectedWordIndex];
                    return (
                      <div className="bg-slate-950/80 rounded-2xl border border-amber-500/20 p-5 sm:p-6 space-y-5 shadow-lg">
                        
                        {/* Word Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-900 pb-4">
                          <div>
                            <span className="text-[9px] uppercase tracking-widest text-slate-500 font-mono">Kata Aktif</span>
                            <div className="flex items-baseline gap-2">
                              <h3 dir="rtl" className="text-3xl font-bold font-amiri text-amber-400">{w.word}</h3>
                              <span className="text-xs text-slate-300 font-semibold">({w.transliteration})</span>
                            </div>
                            <p className="text-xs text-slate-400 mt-1">Arti kata: <strong className="text-white">"{w.translation}"</strong></p>
                          </div>
                        </div>

                        {/* Bento Grid breakdown details */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                          
                          <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block">Kedudukan (Role)</span>
                            <span className="text-xs font-black text-slate-200 block mt-1">{w.role}</span>
                          </div>

                          <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block">Hukum I'rab (State)</span>
                            <span className={`text-xs font-black block mt-1 ${
                              w.state === 'Marfu\'' ? 'text-blue-400' :
                              w.state === 'Mansub' ? 'text-yellow-400' :
                              w.state === 'Majrur' ? 'text-emerald-400' : 'text-red-400'
                            }`}>{w.state}</span>
                          </div>

                          <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block">Tanda (Sign)</span>
                            <span className="text-xs font-black text-slate-200 block mt-1">{w.sign}</span>
                          </div>

                          <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-wider block">Sebab (Reason)</span>
                            <span className="text-[11px] font-bold text-slate-300 block mt-1 leading-snug">{w.reason}</span>
                          </div>

                        </div>

                        {/* Official Formulary Recitation Arabic */}
                        <div className="bg-slate-900/40 p-4 rounded-xl border border-slate-900 space-y-3 shadow-inner">
                          
                          <div className="space-y-1">
                            <span className="text-[9px] text-amber-500 font-bold uppercase tracking-widest block">Lafal I'rab Resmi (العِبَارَةُ النَّحْوِيَّةُ)</span>
                            <p dir="rtl" className="text-xl sm:text-2xl font-semibold leading-relaxed font-amiri text-emerald-200 text-right">
                              {w.formalAr}
                            </p>
                          </div>

                          <div className="border-t border-slate-950 pt-2">
                            <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest block">Terjemahan Gramatikal Resmi</span>
                            <p className="text-xs text-slate-300 leading-relaxed font-medium">
                              "{w.formalId}"
                            </p>
                          </div>

                        </div>

                      </div>
                    );
                  })()
                )}
              </>
            )}

          </div>

        </div>
      )}


      {/* ==========================================================================
         SUB-TAB 2: INTERACTIVE SELF-GUIDED I'RAB BUILDER / CALCULATOR
         ========================================================================== */}
      {activeSubTab === 'builder' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Panel: Builder Options Wizard */}
          <div className="lg:col-span-7 bg-slate-950/50 p-5 sm:p-6 rounded-2xl border border-slate-900 space-y-6">
            
            <div className="flex items-center gap-2 border-b border-slate-900 pb-3">
              <Sliders className="w-5 h-5 text-amber-500" />
              <div>
                <h3 className="text-sm font-black text-slate-100 uppercase">Penyusun I'rab Mandiri</h3>
                <p className="text-[10px] text-slate-400">Susun i'rab kata Anda sendiri dan verifikasi kecocokannya dengan rumus nahwu klasik.</p>
              </div>
            </div>

            {/* Inputs: Arabic and translation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">1. Lafadz Kata Arab</label>
                <input
                  type="text"
                  placeholder="Contoh: الْمُسَافِرُونَ"
                  value={builderWordAr}
                  onChange={(e) => setBuilderWordAr(e.target.value)}
                  dir="rtl"
                  className="block w-full px-3 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-lg text-emerald-300 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">2. Arti Kata Indonesia</label>
                <input
                  type="text"
                  placeholder="Contoh: Orang-orang yang bepergian"
                  value={builderWordId}
                  onChange={(e) => setBuilderWordId(e.target.value)}
                  className="block w-full px-3 py-2.5 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-100 placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500"
                />
              </div>
            </div>

            {/* Option Selection Block */}
            <div className="space-y-4">
              
              {/* Word Type */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex justify-between">
                  <span>3. Jenis Kata (Jenis Isim / Fi'il)</span>
                  <span className="text-amber-500 font-mono">Pilih salah satu</span>
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                  {builderData.wordTypes.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => { setSelectedWordType(t.id); playInteractiveChime('click'); }}
                      className={`px-2.5 py-2 text-left rounded-xl border text-[10px] font-bold transition cursor-pointer ${
                        selectedWordType === t.id
                          ? "bg-amber-500/10 border-amber-500 text-amber-400"
                          : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <span className="block truncate">{t.label}</span>
                      <span dir="rtl" className="block text-[11px] text-right font-amiri text-slate-500">{t.arabic}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* State */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">4. Keadaan I'rab (Hukum Akhir)</label>
                <div className="grid grid-cols-4 gap-2">
                  {builderData.states.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => { setSelectedState(s.id); playInteractiveChime('click'); }}
                      className={`py-2 rounded-xl border text-center transition cursor-pointer flex flex-col items-center justify-center ${
                        selectedState === s.id
                          ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black border-amber-400"
                          : "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700"
                      }`}
                    >
                      <span className="text-[10px] font-extrabold">{s.label.split(' ')[0]}</span>
                      <span dir="rtl" className="text-[11px] font-amiri mt-0.5">{s.arabic}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Dynamic Role & Dynamic Sign side-by-side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Role */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">5. Kedudukan (Maudhi' Kata)</label>
                  <select
                    value={selectedRole}
                    onChange={(e) => { setSelectedRole(e.target.value); playInteractiveChime('click'); }}
                    className="block w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-amber-500 cursor-pointer"
                  >
                    {filteredRoles.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.label} ({r.arabic})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Sign */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">6. Tanda I'rab</label>
                  <select
                    value={selectedSign}
                    onChange={(e) => { setSelectedSign(e.target.value); playInteractiveChime('click'); }}
                    className="block w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:ring-1 focus:ring-amber-500 cursor-pointer"
                  >
                    {filteredSigns.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.label} ({s.arabic})
                      </option>
                    ))}
                  </select>
                </div>

              </div>

            </div>

          </div>


          {/* Right Panel: Validation Output & Saved Items */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live Preview & Validation Sheet */}
            <div className="bg-slate-950/80 rounded-2xl border border-slate-900 p-5 space-y-5">
              
              <div className="flex justify-between items-center border-b border-slate-900 pb-2.5">
                <span className="text-xs font-bold uppercase text-slate-300">Hasil Analisis</span>
                
                {/* Dynamic Validity badge */}
                <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded flex items-center gap-1 border ${
                  validationResult.isValid 
                    ? "bg-emerald-950 text-emerald-400 border-emerald-500/30" 
                    : "bg-red-950 text-red-400 border-red-500/30"
                }`}>
                  {validationResult.isValid ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span>Kaidah Benar</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-3 h-3 text-red-400" />
                      <span>Kaidah Salah</span>
                    </>
                  )}
                </span>
              </div>

              {/* Formulated Sentence Preview */}
              <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800/80 space-y-3.5">
                
                <div className="space-y-1">
                  <span className="text-[9px] text-amber-500 font-bold uppercase tracking-widest block">Formula I'rab Arab</span>
                  <p dir="rtl" className="text-lg sm:text-xl font-bold font-amiri text-emerald-100 leading-normal text-right">
                    {generatedIrab.arabic || "(Lengkapi form)"}
                  </p>
                </div>

                <div className="border-t border-slate-950 pt-2">
                  <span className="text-[9px] text-slate-500 font-bold uppercase tracking-widest block">Penjelasan Bahasa Indonesia</span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {generatedIrab.indonesian || "(Lengkapi form)"}
                  </p>
                </div>

              </div>

              {/* Validation Feedback comment */}
              <div className={`p-3.5 rounded-xl border flex gap-2.5 items-start text-xs leading-relaxed ${
                validationResult.isValid
                  ? "bg-emerald-950/20 border-emerald-500/20 text-emerald-300"
                  : "bg-red-950/20 border-red-500/20 text-red-300"
              }`}>
                {validationResult.isValid ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                )}
                <div>
                  <strong className="block mb-0.5">{validationResult.isValid ? 'Sempurna!' : 'Harap Sesuaikan!'}</strong>
                  <span>{validationResult.comment}</span>
                  {validationResult.recommendedSign && (
                    <p className="mt-1.5 text-xs text-slate-300 font-bold">
                      💡 Rekomendasi: Gunakan tanda <span className="text-amber-400">"{builderData.signs.find(s => s.id === validationResult.recommendedSign)?.label}"</span>.
                    </p>
                  )}
                </div>
              </div>

              {/* Actions row */}
              <div className="flex gap-2">
                <button
                  onClick={handleSaveBuiltIrab}
                  className="w-full py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 cursor-pointer border border-emerald-500/20"
                >
                  <Save className="w-4 h-4" />
                  <span>Simpan Analisis</span>
                </button>
              </div>

            </div>

            {/* Saved analyses shelf */}
            <div className="bg-slate-950/50 rounded-2xl border border-slate-900 p-4 space-y-3">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Koleksi Analisis Saya ({savedIrabs.length})</span>
              
              <div className="space-y-2 max-h-[220px] overflow-y-auto pr-1">
                {savedIrabs.map((item) => (
                  <div key={item.id} className="p-3 bg-slate-900/60 rounded-xl border border-slate-800 flex justify-between items-start gap-3">
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="bg-emerald-950 text-emerald-400 text-[9px] px-1.5 py-0.5 rounded font-mono font-bold">SAVED</span>
                        <strong className="text-xs text-amber-400 font-amiri text-lg">{item.word}</strong>
                      </div>
                      <p dir="rtl" className="text-xs font-semibold text-emerald-200/80 leading-normal text-right">{item.arabic}</p>
                      <p className="text-[10px] text-slate-400 leading-relaxed italic">{item.indonesian}</p>
                    </div>

                    <button
                      onClick={() => handleDeleteSavedIrab(item.id)}
                      className="p-1.5 bg-red-950/30 hover:bg-red-900/40 text-red-400 rounded-lg border border-red-900/20 cursor-pointer"
                      title="Hapus"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}

                {savedIrabs.length === 0 && (
                  <div className="text-center py-6 text-xs text-slate-500">Belum ada analisis yang Anda simpan. Silakan susun di atas!</div>
                )}
              </div>
            </div>

          </div>

        </div>
      )}


      {/* ==========================================================================
         SUB-TAB 3: COMPLETE RULES HANDBOOK (BENTO REFERENCE SHEET)
         ========================================================================== */}
      {activeSubTab === 'handbook' && (
        <div className="space-y-6">
          
          {/* Rules Navigation & CRUD Toolbar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-950/40 p-4 rounded-2xl border border-slate-900">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-1.5">
              {([
                { id: 'All', label: 'Semua Kaidah' },
                { id: 'Marfu', label: "Marfu'at (ـُ)" },
                { id: 'Mansub', label: 'Mansubat (ـَ)' },
                { id: 'Majrur', label: 'Majrurat (ـِ)' },
                { id: 'Majzum', label: 'Majzumat (ـْ)' }
              ] as const).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => { setRulesFilter(tab.id); playInteractiveChime('click'); }}
                  className={`text-[10px] sm:text-xs font-semibold px-4 py-2 rounded-xl border transition-all cursor-pointer ${
                    rulesFilter === tab.id
                      ? "bg-amber-500/20 text-amber-400 border-amber-500/40 font-bold"
                      : "bg-slate-900/60 text-slate-400 border-slate-800 hover:border-slate-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Admin/CRUD Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={handleOpenAddRule}
                className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 text-[10px] sm:text-xs font-black uppercase px-4 py-2 rounded-xl border border-amber-400 shadow-md transition cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Tambah Kaidah</span>
              </button>
              
              <button
                onClick={handleResetRules}
                className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 text-[10px] sm:text-xs font-bold uppercase px-3 py-2 rounded-xl border border-slate-800 transition cursor-pointer"
                title="Kembalikan ke kaidah bawaan sistem"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Bawaan</span>
              </button>
            </div>
          </div>

          {/* Rules Edit/Add Form Panel */}
          {showRuleForm && (
            <div className="bg-slate-950/90 rounded-2xl border border-amber-500/30 p-5 sm:p-6 space-y-4 shadow-xl">
              <div className="flex justify-between items-center border-b border-slate-900 pb-3">
                <h3 className="text-xs font-black text-white uppercase tracking-wider">
                  {ruleFormMode === 'add' ? 'Tambah Kaidah I\'rab Baru' : 'Ubah Kaidah I\'rab'}
                </h3>
                <button
                  onClick={() => setShowRuleForm(false)}
                  className="p-1.5 hover:bg-slate-900 rounded-lg text-slate-400 transition"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* State Selection */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Kelompok I'rab</label>
                  <select
                    value={ruleFormState}
                    onChange={(e) => setRuleFormState(e.target.value as any)}
                    className="block w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-amber-500/50"
                  >
                    <option value="Marfu">Marfu'at (ـُ - Keadaan Rafa')</option>
                    <option value="Mansub">Mansubat (ـَ - Keadaan Nashab)</option>
                    <option value="Majrur">Majrurat (ـِ - Keadaan Jarr)</option>
                    <option value="Majzum">Majzumat (ـْ - Keadaan Jazm)</option>
                  </select>
                </div>

                {/* Applicable To */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Berlaku Untuk</label>
                  <input
                    type="text"
                    placeholder="Contoh: Isim Mufrad, Fi'il, Semua Isim"
                    value={ruleFormApplicableTo}
                    onChange={(e) => setRuleFormApplicableTo(e.target.value)}
                    className="block w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-amber-500/50"
                  />
                </div>

                {/* Name Arabic */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Nama Kaidah (Bahasa Arab)</label>
                  <input
                    type="text"
                    placeholder="Contoh: الْفَاعِلُ"
                    dir="rtl"
                    value={ruleFormNameAr}
                    onChange={(e) => setRuleFormNameAr(e.target.value)}
                    className="block w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-base font-bold font-amiri text-amber-400 focus:outline-none focus:border-amber-500/50"
                  />
                </div>

                {/* Name Indonesian */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Nama Kaidah (Bahasa Indonesia)</label>
                  <input
                    type="text"
                    placeholder="Contoh: Fa'il (Pelaku)"
                    value={ruleFormNameId}
                    onChange={(e) => setRuleFormNameId(e.target.value)}
                    className="block w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-amber-500/50"
                  />
                </div>

                {/* Signs Arabic */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Tanda-tanda I'rab (Bahasa Arab)</label>
                  <input
                    type="text"
                    placeholder="Contoh: الضَّمَّةُ"
                    dir="rtl"
                    value={ruleFormSignAr}
                    onChange={(e) => setRuleFormSignAr(e.target.value)}
                    className="block w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-base font-bold font-amiri text-emerald-400 focus:outline-none focus:border-amber-500/50"
                  />
                </div>

                {/* Signs Indonesian */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Tanda-tanda I'rab (Keterangan Indonesia)</label>
                  <input
                    type="text"
                    placeholder="Contoh: Dhommah / Alif / Wawu"
                    value={ruleFormSignId}
                    onChange={(e) => setRuleFormSignId(e.target.value)}
                    className="block w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-amber-500/50"
                  />
                </div>

                {/* Example Arabic */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Contoh Penerapan (Bahasa Arab)</label>
                  <input
                    type="text"
                    placeholder="Contoh: خَلَقَ اللَّهُ السَّمَاوَاتِ"
                    dir="rtl"
                    value={ruleFormExampleAr}
                    onChange={(e) => setRuleFormExampleAr(e.target.value)}
                    className="block w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-base font-bold font-amiri text-yellow-300 focus:outline-none focus:border-amber-500/50"
                  />
                </div>

                {/* Example Indonesian */}
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Arti Contoh Penerapan (Bahasa Indonesia)</label>
                  <input
                    type="text"
                    placeholder="Contoh: Allah menciptakan langit-langit."
                    value={ruleFormExampleId}
                    onChange={(e) => setRuleFormExampleId(e.target.value)}
                    className="block w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-amber-500/50"
                  />
                </div>

                {/* Explanation */}
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1.5">Penjelasan / Deskripsi Aturan</label>
                  <textarea
                    rows={3}
                    placeholder="Tulis penjelasan lengkap mengenai kaidah nahwu ini..."
                    value={ruleFormExplanation}
                    onChange={(e) => setRuleFormExplanation(e.target.value)}
                    className="block w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-amber-500/50 resize-y"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="border-t border-slate-900 pt-4 flex gap-2 justify-end">
                <button
                  type="button"
                  onClick={() => setShowRuleForm(false)}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-400 text-xs font-bold uppercase transition"
                >
                  Batal
                </button>
                <button
                  type="button"
                  onClick={handleSaveRule}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 text-xs font-black uppercase transition shadow-md border border-amber-400"
                >
                  Simpan Kaidah
                </button>
              </div>
            </div>
          )}

          {/* Handbook Grid List */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredRules.map((rule) => (
              <div
                key={rule.id}
                className="bg-slate-950/60 rounded-2xl border border-slate-900 p-5 space-y-4 shadow-sm hover:border-amber-500/20 hover:bg-slate-900/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  
                  {/* Rule Header */}
                  <div className="flex justify-between items-start gap-2">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded border ${
                        rule.state === 'Marfu' ? 'bg-blue-950 text-blue-400 border-blue-900/30' :
                        rule.state === 'Mansub' ? 'bg-yellow-950 text-yellow-400 border-yellow-900/30' :
                        rule.state === 'Majrur' ? 'bg-emerald-950 text-emerald-400 border-emerald-900/30' :
                        'bg-red-950 text-red-400 border-red-900/30'
                      }`}>
                        {rule.state}
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">({rule.applicableTo})</span>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => handleOpenEditRule(rule)}
                        className="p-1.5 bg-slate-900 hover:bg-slate-850 hover:text-amber-400 text-slate-400 rounded-lg border border-slate-800 transition cursor-pointer"
                        title="Ubah Kaidah"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteRule(rule.id)}
                        className="p-1.5 bg-red-950/20 hover:bg-red-950/50 text-red-400 rounded-lg border border-red-950/30 transition cursor-pointer"
                        title="Hapus Kaidah"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Rule Names */}
                  <div className="space-y-1">
                    <p dir="rtl" className="text-xl font-bold font-amiri text-emerald-400">
                      {rule.nameAr}
                    </p>
                    <h3 className="text-sm font-black text-slate-100">{rule.nameId}</h3>
                  </div>

                  {/* Typical signs bar */}
                  <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-[11px] leading-relaxed">
                    <span className="text-[9px] text-slate-500 uppercase font-mono block mb-0.5">Tanda-Tanda Umum</span>
                    <strong className="text-slate-300">{rule.signId}</strong>
                  </div>

                  {/* Narrative explanation */}
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    {rule.explanation}
                  </p>

                </div>

                {/* Example Callout */}
                <div className="bg-gradient-to-br from-amber-500/5 to-orange-500/5 border border-amber-500/10 p-3.5 rounded-xl space-y-1 text-center">
                  <span className="text-[9px] text-amber-500 font-bold uppercase tracking-widest block">Contoh Penerapan (الْمِثَالُ)</span>
                  <p dir="rtl" className="text-lg font-bold font-amiri text-yellow-300 leading-normal">{rule.exampleAr}</p>
                  <p className="text-[10px] text-slate-300 italic">"{rule.exampleId}"</p>
                </div>

              </div>
            ))}
          </div>

          {/* Quick Tip bar */}
          <div className="bg-slate-950/40 border border-slate-900 p-4 rounded-2xl max-w-2xl mx-auto text-center">
            <p className="text-xs text-slate-400 leading-relaxed">
              💡 <strong>Catatan Belajar:</strong> Setiap kaidah di atas disadur secara presisi dari silabus ilmu Nahwu Al-Ajurrumiyyah dan silsilah sastera kitab LIPIA kelas 7-9 untuk mematangkan penguasaan kaidah fusha bahasa Arab Anda.
            </p>
          </div>

        </div>
      )}


      {/* ==========================================================================
         SUB-TAB 4: COGNITIVE 15-QUESTION NAHWU QUIZ (COMPLETELY LOCAL & DETERMINISTIC)
         ========================================================================== */}
      {activeSubTab === 'quiz' && (
        <div className="max-w-3xl mx-auto">
          
          {/* A. WELCOME SCREEN */}
          {!quizStarted && !quizCompleted && (
            <div className="bg-slate-950/60 p-6 sm:p-10 rounded-3xl border border-slate-900 text-center space-y-6">
              
              <div className="w-16 h-16 bg-amber-500/10 text-amber-400 rounded-2xl border border-amber-500/30 flex items-center justify-center mx-auto shadow-inner">
                <Award className="w-9 h-9 animate-bounce" />
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Evaluasi Ujian Akhir I'rab Nahwu</h2>
                <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto leading-relaxed">
                  Uji kemahiran tata bahasa Arab Anda secara mandiri lewat 15 soal komprehensif. Didesain khusus berdasarkan kurikulum Umar bin Al Khattab Cirebon tanpa bug dan tanpa AI.
                </p>
              </div>

              {/* Specs Badge Board */}
              <div className="grid grid-cols-3 gap-3 max-w-md mx-auto pt-2">
                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <span className="text-[9px] text-slate-500 block uppercase font-mono">Jumlah Soal</span>
                  <strong className="text-sm text-slate-200">15 Pilihan</strong>
                </div>

                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <span className="text-[9px] text-slate-500 block uppercase font-mono">Passing Grade</span>
                  <strong className="text-sm text-emerald-400">80% Lulus</strong>
                </div>

                <div className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                  <span className="text-[9px] text-slate-500 block uppercase font-mono">Sifat Ujian</span>
                  <strong className="text-sm text-amber-400">Klasik</strong>
                </div>
              </div>

              <button
                onClick={handleStartQuiz}
                className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-black text-sm uppercase rounded-xl border border-amber-400 transition cursor-pointer shadow-lg"
              >
                Mulai Ujian Sekarang
              </button>

            </div>
          )}

          {/* B. QUIZ IN-PROGRESS SCREEN */}
          {quizStarted && !quizCompleted && (
            <div className="bg-slate-950/80 p-5 sm:p-8 rounded-3xl border border-slate-900 space-y-6">
              
              {/* Quiz Header Progress bar */}
              <div className="space-y-2 border-b border-slate-900 pb-3">
                <div className="flex justify-between text-xs font-bold uppercase">
                  <span className="text-slate-400">Soal {currentQuestionIndex + 1} dari {irabQuizQuestions.length}</span>
                  <span className="text-amber-500">Benar: {score}</span>
                </div>

                <div className="w-full bg-slate-900 h-2 rounded-full overflow-hidden border border-slate-800">
                  <div 
                    className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIndex + 1) / irabQuizQuestions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question calligraphy card */}
              <div className="bg-gradient-to-r from-emerald-950/20 to-teal-950/20 p-5 rounded-2xl border border-emerald-500/20 space-y-4 text-center">
                
                {currentQuestion.questionAr && (
                  <p dir="rtl" className="text-2xl sm:text-3xl font-extrabold leading-loose text-emerald-300 font-amiri">
                    {currentQuestion.questionAr}
                  </p>
                )}

                <h3 className="text-sm sm:text-base font-bold text-slate-100 tracking-tight">
                  {currentQuestion.questionId}
                </h3>

              </div>

              {/* Options selection List */}
              <div className="space-y-3.5">
                {currentQuestion.options.map((opt, idx) => {
                  const isSelected = selectedOptionIndex === idx;
                  const isCorrectAnswer = idx === currentQuestion.correctAnswerIndex;
                  
                  let optionStyles = "border-slate-800 bg-slate-900/60 text-slate-200 hover:border-slate-600";
                  if (isSelected && !isAnswerSubmitted) {
                    optionStyles = "border-amber-400 bg-amber-500/10 text-amber-400 ring-1 ring-amber-400";
                  } else if (isAnswerSubmitted) {
                    if (isCorrectAnswer) {
                      optionStyles = "border-green-500 bg-green-500/20 text-green-300 ring-2 ring-green-400/50";
                    } else if (isSelected) {
                      optionStyles = "border-red-500 bg-red-500/20 text-red-300 ring-1 ring-red-500/40";
                    } else {
                      optionStyles = "border-slate-850 bg-slate-950/40 text-slate-500 cursor-not-allowed";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswerSubmitted}
                      className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-semibold transition flex justify-between items-center cursor-pointer ${optionStyles}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-6 h-6 rounded-lg text-xs font-black flex items-center justify-center shrink-0 border ${
                          isSelected ? 'bg-amber-400 text-slate-950' : 'bg-slate-950 text-slate-400'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span>{opt}</span>
                      </div>

                      {/* Tick or Cross icons */}
                      {isAnswerSubmitted && isCorrectAnswer && (
                        <Check className="w-5 h-5 text-green-400 shrink-0" />
                      )}
                      {isAnswerSubmitted && isSelected && !isCorrectAnswer && (
                        <X className="w-5 h-5 text-red-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Submitting Actions Panel */}
              <div className="pt-3 border-t border-slate-900 flex justify-end gap-3">
                {!isAnswerSubmitted ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={selectedOptionIndex === null}
                    className="w-full sm:w-auto px-6 py-3 bg-amber-500 disabled:opacity-40 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl cursor-pointer shadow hover:scale-[1.01] transition"
                  >
                    Kunci Jawaban Anda
                  </button>
                ) : (
                  <button
                    onClick={handleNextQuestion}
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white font-black text-xs uppercase tracking-wider rounded-xl cursor-pointer shadow-md flex items-center justify-center gap-1.5"
                  >
                    <span>{currentQuestionIndex === irabQuizQuestions.length - 1 ? 'Selesai & Lihat Nilai' : 'Pertanyaan Selanjutnya'}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Educational Explanation Banner */}
              {isAnswerSubmitted && (
                <div className="bg-slate-900/60 border border-amber-500/10 p-4 rounded-xl flex gap-3 items-start">
                  <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5 animate-pulse" />
                  <div className="text-xs space-y-1">
                    <strong className="text-amber-400 block uppercase font-mono tracking-wider">Tafsir Kaidah Nahwu</strong>
                    <p className="text-slate-300 leading-relaxed font-medium">
                      {currentQuestion.explanation}
                    </p>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* C. GRADUATION / COMPLETION SCREEN */}
          {quizCompleted && (
            <div className="bg-slate-950/60 p-6 sm:p-10 rounded-3xl border border-slate-900 text-center space-y-6">
              
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-amber-500 text-slate-950 rounded-full flex items-center justify-center mx-auto shadow-xl">
                <Award className="w-12 h-12" />
              </div>

              <div className="space-y-2">
                <h2 className="text-3xl font-extrabold text-white">HASIL UJIAN AKHIR</h2>
                <p className="text-xs text-slate-400">SMP IT Umar bin Al Khattab Cirebon • Bidang Nahwu & I'rab</p>
              </div>

              {/* Visual Score Board */}
              <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 max-w-sm mx-auto space-y-3">
                <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono block">Skor Kelulusan</span>
                <div className="text-5xl font-black text-amber-400 font-mono">
                  {Math.round((score / irabQuizQuestions.length) * 100)}%
                </div>
                <p className="text-xs text-slate-300 font-bold">
                  Jawaban Benar: <span className="text-emerald-400 font-mono">{score}</span> dari {irabQuizQuestions.length} Soal
                </p>

                {/* Grade evaluation */}
                <div className="pt-2 border-t border-slate-950">
                  {score >= 12 ? (
                    <span className="text-xs font-black uppercase text-green-400 bg-green-500/10 px-3 py-1 rounded border border-green-500/20">
                      Mumtaz (Sangat Baik / Lulus)
                    </span>
                  ) : score >= 9 ? (
                    <span className="text-xs font-black uppercase text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded border border-yellow-500/20">
                      Jayyid (Cukup / Lulus)
                    </span>
                  ) : (
                    <span className="text-xs font-black uppercase text-red-400 bg-red-500/10 px-3 py-1 rounded border border-red-500/20">
                      Rasyib (Belum Lulus / Ulangi)
                    </span>
                  )}
                </div>
              </div>

              {/* Wrong Answers Recap List */}
              {wrongAnswers.length > 0 && (
                <div className="text-left bg-slate-900/40 p-4 rounded-xl border border-slate-900 space-y-3 max-h-[220px] overflow-y-auto max-w-lg mx-auto">
                  <span className="text-[10px] text-slate-400 font-mono block uppercase border-b border-slate-950 pb-1.5">Koreksi Evaluasi Soal Salah:</span>
                  {wrongAnswers.map((w, index) => {
                    const originalQ = irabQuizQuestions.find(q => q.id === w.questionId);
                    return (
                      <div key={index} className="text-xs space-y-1 pb-2 border-b border-slate-950/60 last:border-0 last:pb-0">
                        <strong className="text-slate-300">Soal #{w.questionId}: {originalQ?.questionId}</strong>
                        <p className="text-red-400 font-medium">Jawaban Anda: "{w.userAnswer}"</p>
                        <p className="text-emerald-400 font-medium">Seharusnya: "{w.correctAnswer}"</p>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                <button
                  onClick={handleStartQuiz}
                  className="px-6 py-3 bg-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl cursor-pointer shadow hover:scale-[1.01]"
                >
                  Ulangi Ujian
                </button>

                <button
                  onClick={() => { setActiveSubTab('analyzer'); playInteractiveChime('click'); }}
                  className="px-6 py-3 bg-slate-900 hover:bg-slate-850 text-slate-300 border border-slate-800 font-black text-xs uppercase tracking-wider rounded-xl cursor-pointer"
                >
                  Kembali ke Analisis Kalimat
                </button>
              </div>

            </div>
          )}

        </div>
      )}

    </div>
  );
}
