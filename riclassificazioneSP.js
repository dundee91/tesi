
// FUNZIONI RICLASSIFICAZIONE

function sommeRiclassificazioneSPF() {
    // A) TOTALE IMMOBILIZZAZIONI NETTE

    // Immobilizzazioni finanziarie e crediti infragruppo a m/l termine
    var SPFimmobilizzazioniFinanziarie =
        $('#impreseControllate').maskMoney('unmasked')[0] +
        $('#impreseCollegate').maskMoney('unmasked')[0] +
        $('#impreseControllanti').maskMoney('unmasked')[0] +
        $('#altreImprese').maskMoney('unmasked')[0] +
        $('#creditiImmobilizzazioniImpreseControllateOltre12Mesi').maskMoney('unmasked')[0] +
        $('#creditiImmobilizzazioniImpreseCollegateOltre12Mesi').maskMoney('unmasked')[0] +
        $('#creditiImmobilizzazioniImpreseControllantiOltre12Mesi').maskMoney('unmasked')[0] +
        $('#creditiImmobilizzazioniAltreImpreseOltre12Mesi').maskMoney('unmasked')[0] +
        $('#altriTitoliImmobilizzazioni').maskMoney('unmasked')[0] +
        $('#creditiAttivoCircolanteClientiOltre12Mesi').maskMoney('unmasked')[0] +
        $('#creditiAttivoCircolanteImpreseControllateOltre12Mesi').maskMoney('unmasked')[0] +
        $('#creditiAttivoCircolanteImpreseCollegateOltre12Mesi').maskMoney('unmasked')[0] +
        $('#creditiAttivoCircolanteImpreseControllantiOltre12Mesi').maskMoney('unmasked')[0] +
        $('#creditiAttivoCircolanteCreditiTributariOltre12Mesi').maskMoney('unmasked')[0] +
        $('#creditiAttivoCircolanteImposteAnticipateOltre12Mesi').maskMoney('unmasked')[0] +
        $('#creditiAttivoCircolanteAltreImpreseOltre12Mesi').maskMoney('unmasked')[0] +
        $('#accontiOltre12Mesi').maskMoney('unmasked')[0]

    $('#SPFimmobilizzazioniFinanziarie').maskMoney('mask', SPFimmobilizzazioniFinanziarie)[0]

    RFIsommaImmobilizzazioniNette()
    var totaleImmobilizzazioniNette = $('#SPFtotaleImmobilizzazioniNette').maskMoney('unmasked')[0]

    // B) TOTALE ATTIVO CIRCOLANTE

    // crediti commerciali
    var SPFcreditiCommerciali = $('#creditiAttivoCircolanteClientiEntro12Mesi').maskMoney('unmasked')[0] - $('#accontiEntro12Mesi').maskMoney('unmasked')[0]
    $('#SPFcreditiCommerciali').maskMoney('mask', SPFcreditiCommerciali)[0]

    // altri crediti
    var SPFaltriCrediti = $('#creditiImmobilizzazioniImpreseControllateEntro12Mesi').maskMoney('unmasked')[0] +
        $('#creditiImmobilizzazioniImpreseCollegateEntro12Mesi').maskMoney('unmasked')[0] +
        $('#creditiImmobilizzazioniImpreseControllantiEntro12Mesi').maskMoney('unmasked')[0] +
        $('#creditiImmobilizzazioniAltreImpreseEntro12Mesi').maskMoney('unmasked')[0] +
        $('#creditiAttivoCircolanteImpreseControllateEntro12Mesi').maskMoney('unmasked')[0] +
        $('#creditiAttivoCircolanteImpreseCollegateEntro12Mesi').maskMoney('unmasked')[0] +
        $('#creditiAttivoCircolanteImpreseControllantiEntro12Mesi').maskMoney('unmasked')[0] +
        $('#creditiAttivoCircolanteCreditiTributariEntro12Mesi').maskMoney('unmasked')[0] +
        $('#creditiAttivoCircolanteImposteAnticipateEntro12Mesi').maskMoney('unmasked')[0] +
        $('#creditiAttivoCircolanteAltreImpreseEntro12Mesi').maskMoney('unmasked')[0]

    $('#SPFaltriCrediti').maskMoney('mask', SPFaltriCrediti)[0]

    // ratei e risconti attivi
    var SPFrateiRiscontiAttivi = $('#rateiRiscontiAttivo').maskMoney('unmasked')[0]
    $('#SPFrateiRiscontiAttivi').maskMoney('mask', SPFrateiRiscontiAttivi)[0]

    // liquidità
    var SPFliquidita =
        $('#partecipazioniImpreseControllate').maskMoney('unmasked')[0] +
        $('#partecipazioniImpreseCollegate').maskMoney('unmasked')[0] +
        $('#partecipazioniImpreseControllanti').maskMoney('unmasked')[0] +
        $('#altrePartecipazioni').maskMoney('unmasked')[0] +
        $('#altriTitoliAttivoCircolante').maskMoney('unmasked')[0] +
        $('#depositiBancariPostali').maskMoney('unmasked')[0] +
        $('#assegni').maskMoney('unmasked')[0] +
        $('#danaroValoriCassa').maskMoney('unmasked')[0]

    $('#SPFliquidita').maskMoney('mask', SPFliquidita)[0]

    RFIsommaAttivoCircolante()
    var totaleAttivoCircolante = $('#SPFtotaleAttivoCircolante').maskMoney('unmasked')[0]

    //  C) TOTALE ATTIVO (A+B)
    var totaleAttivo = totaleImmobilizzazioniNette + totaleAttivoCircolante
    $('#SPFtotaleAttivo').maskMoney('mask', SPFtotaleAttivo)[0]

    // F) PATRIMONIO NETTO

    // capitale sociale
    var SPFcapitaleSociale =
        $('#creditiVersoSoci').maskMoney('unmasked')[0] -
        $('#azioniProprieImmobilizzazioniFinanziarie').maskMoney('unmasked')[0] -
        $('#azioniProprieAttivitaFinanziarie').maskMoney('unmasked')[0] +
        $('#capitale').maskMoney('unmasked')[0]

    $('#SPFcapitaleSociale').maskMoney('mask', SPFcapitaleSociale)[0]

    // riserve
    var SPFriserve =
        $('#riservaSovrapprezzoAzioni').maskMoney('unmasked')[0] +
        $('#riserveRivalutazione').maskMoney('unmasked')[0] +
        $('#riservaLegale').maskMoney('unmasked')[0] +
        $('#riservaAzioniProprie').maskMoney('unmasked')[0] +
        $('#riserveStatutarie').maskMoney('unmasked')[0] +
        $('#altreRiserve').maskMoney('unmasked')[0] +
        $('#utilePortatoNuovo').maskMoney('unmasked')[0]

    $('#SPFriserve').maskMoney('mask', SPFriserve)[0]

    // reddito netto
    var SPFredditoNetto = $('#utileEsercizio').maskMoney('unmasked')[0]
    $('#SPFredditoNetto').maskMoney('mask', SPFredditoNetto)[0]

    RFIsommaPatrimonioNettoSPF()
    var totalePatrimonioNetto = $('#SPFtotalePatrimonioNetto').maskMoney('unmasked')[0]


    // E) PASSIVO A M/L TERMINE

    // Debiti finanziari a medio - lungo termine
    var SPFdebitiFinanziariMlTermine =
        $('#obbligazioniOltre12Mesi').maskMoney('unmasked')[0] +
        $('#obbligazioniConvertibiliOltre12Mesi').maskMoney('unmasked')[0] +
        $('#debitiVersoSociFinanziamentiOltre12Mesi').maskMoney('unmasked')[0] +
        $('#debitiVersoBancheOltre12Mesi').maskMoney('unmasked')[0] +
        $('#debitiVersoAltriFinanziatoriOltre12Mesi').maskMoney('unmasked')[0] +
        $('#debitiVersoImpreseControllateOltre12Mesi').maskMoney('unmasked')[0] +
        $('#debitiVersoImpreseCollegateOltre12Mesi').maskMoney('unmasked')[0] +
        $('#debitiVersoControllantiOltre12Mesi').maskMoney('unmasked')[0]

    $('#SPFdebitiFinanziariMlTermine').maskMoney('mask', SPFdebitiFinanziariMlTermine)[0]

    // Altri debiti a medio - lungo termine
    var SPFaltriDebiti =
        $('#debitiVersoFornitoriOltre12Mesi').maskMoney('unmasked')[0] +
        $('#debitiRappresentatiTitoliCreditoOltre12Mesi').maskMoney('unmasked')[0] +
        $('#debitiTributariOltre12Mesi').maskMoney('unmasked')[0] +
        $('#debitiVersoIstituiPrevidenzaOltre12Mesi').maskMoney('unmasked')[0] +
        $('#altriDebitiOltre12Mesi').maskMoney('unmasked')[0]

    $('#SPFaltriDebiti').maskMoney('mask', SPFaltriDebiti)[0]

    // fondo tfr
    var SPFfondoTFR = $('#trattamentoFineRapportoSP').maskMoney('unmasked')[0]
    $('#SPFfondoTFR').maskMoney('mask', SPFfondoTFR)[0]

    // Altri fondi
    var SPFaltriFondi =
        $('#trattamentoQuiescenzaObblighiSimili').maskMoney('unmasked')[0] +
        $('#imposteAncheDifferite').maskMoney('unmasked')[0] +
        $('#altriFondi').maskMoney('unmasked')[0]

    $('#SPFaltriFondi').maskMoney('mask', SPFaltriFondi)[0]

    RFIsommaPassivoMlTermine()
    var totalePassivoMlTermine = $('#SPFtotalePassivoMlTermine').maskMoney('unmasked')[0]

    // D) PASSIVO A BREVE TERMINE

    // Debiti finanziari a breve termine
    var SPFdebitiFinanziariBreveTermine =
        $('#obbligazioniEntro12Mesi').maskMoney('unmasked')[0] +
        $('#obbligazioniConvertibiliEntro12Mesi').maskMoney('unmasked')[0] +
        $('#debitiVersoSociFinanziamentiEntro12Mesi').maskMoney('unmasked')[0] +
        $('#debitiVersoBancheEntro12Mesi').maskMoney('unmasked')[0] +
        $('#debitiVersoAltriFinanziatoriEntro12Mesi').maskMoney('unmasked')[0] +
        $('#debitiVersoImpreseControllateEntro12Mesi').maskMoney('unmasked')[0] +
        $('#debitiVersoImpreseCollegateEntro12Mesi').maskMoney('unmasked')[0] +
        $('#debitiVersoControllantiEntro12Mesi').maskMoney('unmasked')[0]

    $('#SPFdebitiFinanziariBreveTermine').maskMoney('mask', SPFdebitiFinanziariBreveTermine)[0]

    // Debiti commerciali verso fornitori
    var SPFdebitiCommercialiFornitori =
        $('#debitiVersoFornitoriEntro12Mesi').maskMoney('unmasked')[0] +
        $('#debitiRappresentatiTitoliCreditoEntro12Mesi').maskMoney('unmasked')[0]

    $('#SPFdebitiCommercialiFornitori').maskMoney('mask', SPFdebitiCommercialiFornitori)[0]

    // Altri debiti non finanziari
    var SPFaltriDebitiNonFinanziari =
        $('#debitiTributariEntro12Mesi').maskMoney('unmasked')[0] +
        $('#debitiVersoIstituiPrevidenzaEntro12Mesi').maskMoney('unmasked')[0] +
        $('#altriDebitiEntro12Mesi').maskMoney('unmasked')[0]

    $('#SPFaltriDebitiNonFinanziari').maskMoney('mask', SPFaltriDebitiNonFinanziari)[0]

    // Ratei e risconti passivi
    var SPFrateiRiscontiPassivi = $('#rateiRiscontiPassivo').maskMoney('unmasked')[0]
    $('#SPFrateiRiscontiPassivi').maskMoney('mask', SPFrateiRiscontiPassivi)[0]

    RFIsommaPassivoBreveTermine()
    var totalePassivoBreveTermine = $('#SPFtotalePassivoBreveTermine').maskMoney('unmasked')[0]
    $('#totalePassivoBreveTermine').maskMoney('mask', totalePassivoBreveTermine)[0]

    // (G) TOTALE PASSIVO E PATRIMONIO NETTO (D+E+F)
    var totalePassivoPatrimonioNetto = totalePatrimonioNetto + totalePassivoMlTermine + totalePassivoBreveTermine
    $('#SPFtotalePassivoPatrimonioNetto').maskMoney('mask', totalePassivoPatrimonioNetto)[0]

    // EVENTUALE SQUADRATURA ATTIVO/PASS
    var eventualeSquadraturaAttivoPass = totaleAttivo - totalePassivoPatrimonioNetto
    $('#SPFeventualeSquadraturaAttivoPass').maskMoney('mask', eventualeSquadraturaAttivoPass)[0]
}

function sommeRiclassificazioneSPFO() {

    // Immobilizzazioni finanziarie nette
    var SPFOimmobilizzazioniFinanziarieNette =
    $('#impreseControllate').maskMoney('unmasked')[0] +
    $('#impreseCollegate').maskMoney('unmasked')[0] +
    $('#impreseControllanti').maskMoney('unmasked')[0] +
    $('#altreImprese').maskMoney('unmasked')[0] +
    $('#altriTitoliImmobilizzazioni').maskMoney('unmasked')[0] +
    $('#creditiAttivoCircolanteClientiOltre12Mesi').maskMoney('unmasked')[0] +
    $('#creditiAttivoCircolanteCreditiTributariOltre12Mesi').maskMoney('unmasked')[0] +
    $('#creditiAttivoCircolanteImposteAnticipateEntro12Mesi').maskMoney('unmasked')[0] +
    $('#creditiAttivoCircolanteAltreImpreseOltre12Mesi').maskMoney('unmasked')[0] -
    $('#accontiOltre12Mesi').maskMoney('unmasked')[0]

    $('#SPFOimmobilizzazioniFinanziarieNette').maskMoney('mask',SPFOimmobilizzazioniFinanziarieNette )[0]

    // A) TOTALE IMMOBILIZZAZIONI NETTE
    RFOsommaImmobilizzazioniNette()

    // Crediti verso clienti
    var SPFOcreditiVersoClienti =
    $('#creditiAttivoCircolanteClientiEntro12Mesi').maskMoney('unmasked')[0] -
    $('#accontiEntro12Mesi').maskMoney('unmasked')[0]

    $('#SPFOcreditiVersoClienti').maskMoney('mask',SPFOcreditiVersoClienti)[0]    

    // Altri crediti
    var SPFOaltriCrediti =
    $('#creditiAttivoCircolanteCreditiTributariEntro12Mesi').maskMoney('unmasked')[0] +
    $('#creditiAttivoCircolanteImposteAnticipateEntro12Mesi').maskMoney('unmasked')[0] +
    $('#creditiAttivoCircolanteAltreImpreseEntro12Mesi').maskMoney('unmasked')[0]

    $('#SPFOaltriCrediti').maskMoney('mask',SPFOaltriCrediti)[0]       

    // Ratei e risconti attivi
    var SPFOrateiRiscontiAttivi = $('#totaleRateiRiscontiAttivi').maskMoney('unmasked')[0]
    $('#SPFOrateiRiscontiAttivi').maskMoney('mask',SPFOrateiRiscontiAttivi)[0]

    // B) ATTIVO COMMERCIALE
    RFOsommaAttivoCommerciale()

    // Altri crediti
    var SPFOaltriCrediti =
    $('#creditiAttivoCircolanteCreditiTributariEntro12Mesi').maskMoney('unmasked')[0] +
    $('#creditiAttivoCircolanteImposteAnticipateEntro12Mesi').maskMoney('unmasked')[0] +
    $('#creditiAttivoCircolanteAltreImpreseEntro12Mesi').maskMoney('unmasked')[0]

    $('#SPFOaltriCrediti').maskMoney('mask',SPFOaltriCrediti )[0]

    // Debiti verso fornitori
    var SPFOdebitiVersoFornitori =
    $('#debitiVersoFornitoriEntro12Mesi').maskMoney('unmasked')[0] +
    $('#debitiRappresentatiTitoliCreditoEntro12Mesi').maskMoney('unmasked')[0]

    $('#SPFOdebitiVersoFornitori').maskMoney('mask',SPFOdebitiVersoFornitori )[0]
  
    // Altri debiti non finanziari
    var SPFOaltriDebitiNonFinanziari =
    $('#debitiVersoFornitoriOltre12Mesi').maskMoney('unmasked')[0] +
    $('#debitiRappresentatiTitoliCreditoOltre12Mesi').maskMoney('unmasked')[0] +
    $('#debitiTributariEntro12Mesi').maskMoney('unmasked')[0] +
    $('#debitiTributariOltre12Mesi').maskMoney('unmasked')[0] +
    $('#debitiVersoIstituiPrevidenzaEntro12Mesi').maskMoney('unmasked')[0] +
    $('#debitiVersoIstituiPrevidenzaOltre12Mesi').maskMoney('unmasked')[0] +
    $('#altriDebitiEntro12Mesi').maskMoney('unmasked')[0] +
    $('#altriDebitiOltre12Mesi').maskMoney('unmasked')[0]

    $('#SPFOaltriDebitiNonFinanziari').maskMoney('mask',SPFOaltriDebitiNonFinanziari)[0]

    // Ratei e risconti passivi
    var SPFOrateiRiscontiPassivi = $('#totaleRateiRiscontiPassivi').maskMoney('unmasked')[0]
    $('#SPFOrateiRiscontiPassivi').maskMoney('mask',SPFOrateiRiscontiPassivi)[0]

    // C) PASSIVO COMMERCIALE
    RFOsommaPassivoCommerciale()

    // (D) CAPITALE D'ESERCIZIO (B-C)
    var SPFOcapitaleEsercizio =
    $('#SPFOtotaleAttivoCommerciale').maskMoney('unmasked')[0] -
    $('#SPFOtotalePassivoCommerciale').maskMoney('unmasked')[0]

    $('#SPFOcapitaleEsercizio').maskMoney('mask',SPFOcapitaleEsercizio)[0]

    // Fondi rischi e oneri
    var SPFOfondiRischiOneri = $('#totaleFondiRischiOneri').maskMoney('unmasked')[0]
    $('#SPFOfondiRischiOneri').maskMoney('mask',SPFOfondiRischiOneri)[0]

    // Fondo tfr
    var SPFOfondoTfr = $('#trattamentoFineRapportoSP').maskMoney('unmasked')[0]
    $('#SPFOfondoTfr').maskMoney('mask',SPFOfondoTfr)[0]

    // (E) FONDI OPERATIVI
    RFOsommaFondiOperativi()

    // (F) CAPITALE INVESTITO NETTO (A+D-E)
    var SPFOcapitaleInvestitoNetto =
    $('#SPFOtotaleImmobilizzazioniNette').maskMoney('unmasked')[0] +
    $('#SPFOcapitaleEsercizio').maskMoney('unmasked')[0] -
    $('#SPFOtotaleFondiOperativi').maskMoney('unmasked')[0]

    $('#SPFOcapitaleInvestitoNetto').maskMoney('mask',SPFOcapitaleInvestitoNetto)[0]

    // Debiti finanziari a breve termine
    var SPFOdebitiFinanziariBreveTermine =
    $('#obbligazioniEntro12Mesi').maskMoney('unmasked')[0] +
    $('#obbligazioniConvertibiliEntro12Mesi').maskMoney('unmasked')[0] +
    $('#debitiVersoSociFinanziamentiEntro12Mesi').maskMoney('unmasked')[0] +
    $('#debitiVersoBancheEntro12Mesi').maskMoney('unmasked')[0] +
    $('#debitiVersoAltriFinanziatoriEntro12Mesi').maskMoney('unmasked')[0] +
    $('#debitiVersoImpreseControllateEntro12Mesi').maskMoney('unmasked')[0] +
    $('#debitiVersoImpreseCollegateEntro12Mesi').maskMoney('unmasked')[0] +
    $('#debitiVersoControllantiEntro12Mesi').maskMoney('unmasked')[0]

    $('#SPFOdebitiFinanziariBreveTermine').maskMoney('mask',SPFOdebitiFinanziariBreveTermine)[0]

    // Disponibilità liquide
    var SPFOdisponibilitaLiquide =
    $('#partecipazioniImpreseControllate').maskMoney('unmasked')[0] -
    $('#partecipazioniImpreseCollegate').maskMoney('unmasked')[0] -
    $('#partecipazioniImpreseControllanti').maskMoney('unmasked')[0] -
    $('#altrePartecipazioni').maskMoney('unmasked')[0] -
    $('#altriTitoliAttivoCircolante').maskMoney('unmasked')[0] -
    $('#depositiBancariPostali').maskMoney('unmasked')[0] -
    $('#assegni').maskMoney('unmasked')[0] -
    $('#danaroValoriCassa').maskMoney('unmasked')[0]

    $('#SPFOdisponibilitaLiquide').maskMoney('mask',SPFOdisponibilitaLiquide)[0]

    // Crediti finanziari a breve termine
    var SPFOcreditiFinanziariBreveTermine =
    $('#creditiImmobilizzazioniImpreseControllateEntro12Mesi').maskMoney('unmasked')[0] -
    $('#creditiImmobilizzazioniImpreseCollegateEntro12Mesi').maskMoney('unmasked')[0] -
    $('#creditiImmobilizzazioniImpreseControllantiEntro12Mesi').maskMoney('unmasked')[0] -
    $('#creditiImmobilizzazioniAltreImpreseEntro12Mesi').maskMoney('unmasked')[0] -
    $('#creditiAttivoCircolanteImpreseControllateEntro12Mesi').maskMoney('unmasked')[0] -
    $('#creditiAttivoCircolanteImpreseCollegateEntro12Mesi').maskMoney('unmasked')[0] -
    $('#creditiAttivoCircolanteImpreseControllantiEntro12Mesi').maskMoney('unmasked')[0]

    $('#SPFOcreditiFinanziariBreveTermine').maskMoney('mask',SPFOcreditiFinanziariBreveTermine)[0]

    // (G) POSIZIONE FINANZIARIA A BREVE TERMINE
    RFOsommaPosizioneFinanziariaBreveTermine()

    // Debiti finanziari a m/l termine
    var SPFOdebitiFinanziariMedioLungoTermine =
    $('#obbligazioniOltre12Mesi').maskMoney('unmasked')[0] +
    $('#obbligazioniConvertibiliOltre12Mesi').maskMoney('unmasked')[0] +
    $('#debitiVersoSociFinanziamentiOltre12Mesi').maskMoney('unmasked')[0] +
    $('#debitiVersoBancheOltre12Mesi').maskMoney('unmasked')[0] +
    $('#debitiVersoAltriFinanziatoriOltre12Mesi').maskMoney('unmasked')[0] +
    $('#debitiVersoImpreseControllateOltre12Mesi').maskMoney('unmasked')[0] +
    $('#debitiVersoImpreseCollegateOltre12Mesi').maskMoney('unmasked')[0] +
    $('#debitiVersoControllantiOltre12Mesi').maskMoney('unmasked')[0]

    $('#SPFOdebitiFinanziariMedioLungoTermine').maskMoney('mask',SPFOdebitiFinanziariMedioLungoTermine)[0]

    // Crediti finanziari a m/l termine
    var SPFOcreditiFinanziariMedioLungoTermine =
    $('#creditiImmobilizzazioniImpreseControllateOltre12Mesi').maskMoney('unmasked')[0] +
    $('#creditiImmobilizzazioniImpreseCollegateOltre12Mesi').maskMoney('unmasked')[0] +
    $('#creditiImmobilizzazioniImpreseControllantiOltre12Mesi').maskMoney('unmasked')[0] +
    $('#creditiImmobilizzazioniAltreImpreseOltre12Mesi').maskMoney('unmasked')[0] +
    $('#creditiAttivoCircolanteImpreseControllateOltre12Mesi').maskMoney('unmasked')[0] +
    $('#creditiAttivoCircolanteImpreseCollegateOltre12Mesi').maskMoney('unmasked')[0] +
    $('#creditiAttivoCircolanteImpreseControllantiOltre12Mesi').maskMoney('unmasked')[0]

    $('#SPFOcreditiFinanziariMedioLungoTermine').maskMoney('mask',SPFOcreditiFinanziariMedioLungoTermine)[0]

    // (E) POSIZIONE FINANZIARIA A M/L TERMINE
    RFOsommaPosizioneFinanziariaMLTermine()

    // (F) TOTALE POSIZIONE FINANZIARIA
    var SPFOtotalePosizioneFinanziaria =
    $('#SPFOtotalePosizioneFinanziariaBreveTermine').maskMoney('unmasked')[0] +
    $('#SPFOtotalePosizioneFinanziariaMedioLungoTermine').maskMoney('unmasked')[0]

    $('#SPFOtotalePosizioneFinanziaria').maskMoney('mask',SPFOtotalePosizioneFinanziaria)[0]

    // Capitale sociale e finanziamenti in conto capitale
    var SPFOcapitaleSocialeFinanziamentiContoCapitale =
    $('#capitale').maskMoney('unmasked')[0] -
    $('#creditiVersoSoci').maskMoney('unmasked')[0] -
    $('#azioniProprieImmobilizzazioniFinanziarie').maskMoney('unmasked')[0] -
    $('#azioniProprieAttivitaFinanziarie').maskMoney('unmasked')[0]

    $('#SPFOcapitaleSocialeFinanziamentiContoCapitale').maskMoney('mask',SPFOcapitaleSocialeFinanziamentiContoCapitale)[0]

    // Riserve
    var SPFOriserve =
    $('#riservaSovrapprezzoAzioni').maskMoney('unmasked')[0] +
    $('#riserveRivalutazione').maskMoney('unmasked')[0] +
    $('#riservaLegale').maskMoney('unmasked')[0] +
    $('#riservaAzioniProprie').maskMoney('unmasked')[0] +
    $('#riserveStatutarie').maskMoney('unmasked')[0] +
    $('#altreRiserve').maskMoney('unmasked')[0] +
    $('#utilePortatoNuovo').maskMoney('unmasked')[0]

    $('#SPFOriserve').maskMoney('mask',SPFOriserve)[0]
 
    // Reddito netto
    var SPFOredditonetto = $('#SPFredditoNetto').maskMoney('unmasked')[0]
    $('#SPFOredditonetto').maskMoney('mask',SPFOredditonetto)[0]

    // (H) PATRIMONIO NETTO
    RFOsommaPatrimonioNetto()

    // (I) TOTALE DEBITO FINANZIARIO E PATRIMONIO NETTO (F+H)
    var SPFOtotaleDebitoFinanziarioPatrimonioNetto =
    $('#SPFOtotalePosizioneFinanziaria').maskMoney('unmasked')[0] +
    $('#SPFOtotalePatrimonioNetto').maskMoney('unmasked')[0]

    $('#SPFOtotaleDebitoFinanziarioPatrimonioNetto').maskMoney('mask',SPFOtotaleDebitoFinanziarioPatrimonioNetto)[0]
}

/* RICLASSIFICATO FINANZIARIO */

function RFIsommaImmobilizzazioniNette() {
    var arr = $(document.getElementsByName('SPFimmobilizzazioniNette')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i];
    }
    $('#SPFtotaleImmobilizzazioniNette').maskMoney('mask',tot)[0]
}

function RFIsommaAttivoCircolante() {
    var arr = $(document.getElementsByName('SPFattivoCircolante')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
        
            tot += arr[i];
    }
    $('#SPFtotaleAttivoCircolante').maskMoney('mask',tot)[0]
}

function RFIsommaPatrimonioNettoSPF() {
    var arr = $(document.getElementsByName('SPFpatrimonioNetto')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {
            tot += arr[i];
    }
    $('#SPFtotalePatrimonioNetto').maskMoney('mask',tot)[0]
}

function RFIsommaPassivoMlTermine() {
    var arr = $(document.getElementsByName('SPFpassivoMLTermine')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {        
            tot += arr[i];
    }
    $('#SPFtotalePassivoMlTermine').maskMoney('mask',tot)[0]
}

function RFIsommaPassivoBreveTermine() {
    var arr = $(document.getElementsByName('SPFpassivoBreveTermine')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {        
            tot += arr[i];
    }
    $('#SPFtotalePassivoBreveTermine').maskMoney('mask',tot)[0]
}


/* RICLASSIFICATO FUNZIONALE (OPERATIVO) */

function RFOsommaImmobilizzazioniNette() {
    var arr = $(document.getElementsByName('SPFOimmobilizzazioniNette')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {        
            tot += arr[i];
    }
    $('#SPFOtotaleImmobilizzazioniNette').maskMoney('mask',tot)[0]
}

function RFOsommaAttivoCommerciale() {
    var arr = $(document.getElementsByName('SPFOattivoCommerciale')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {        
            tot += arr[i];
    }
    $('#SPFOtotaleAttivoCommerciale').maskMoney('mask',tot)[0]
}

function RFOsommaPassivoCommerciale() {
    var arr = $(document.getElementsByName('SPFOpassivoCommerciale')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {        
            tot += arr[i];
    }
    $('#SPFOtotalePassivoCommerciale').maskMoney('mask',tot)[0]
}

function RFOsommaFondiOperativi() {
    var arr = $(document.getElementsByName('SPFOfondiOperativi')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {        
            tot += arr[i];
    }
    $('#SPFOtotaleFondiOperativi').maskMoney('mask',tot)[0]
}

function RFOsommaPosizioneFinanziariaBreveTermine() {
    var arr = $(document.getElementsByName('SPFOPosizioneFinanziariaBreveTermine')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {        
            tot += arr[i];
    }
    $('#SPFOtotalePosizioneFinanziariaBreveTermine').maskMoney('mask',tot)[0]
}

function RFOsommaPosizioneFinanziariaMLTermine() {
    var arr = $(document.getElementsByName('SPFOPosizioneFinanziariaMedioLungoTermine')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {        
            tot += arr[i];
    }
    $('#SPFOtotalePosizioneFinanziariaMedioLungoTermine').maskMoney('mask',tot)[0]
}

function RFOsommaPatrimonioNetto() {
    var arr = $(document.getElementsByName('SPFOPatrimonioNetto')).maskMoney('unmasked');
    var tot = 0;
    for (var i = 0; i < arr.length; i++) {        
            tot += arr[i];
    }
    $('#SPFOtotalePatrimonioNetto').maskMoney('mask',tot)[0]
}


