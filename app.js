/* ==========================================================================
   EXECUÇÃO CONSISTENTE - LOGIC & REACTIVE CONTROLLER
   ========================================================================== */

const INITIAL_DATA = {
  "generated_at": "2026-09-01T08:41:24.464780",
  "unidade": "DISSOBEL / SOBRAL-CE",
  "geo": "GEO NO",
  "agendamento_summary": {
    "geo": "GEO NO",
    "revenda": "DISSOBEL/SOBRAL(CE)",
    "grade_plan_carros": 144,
    "carros_carregados": 138,
    "pct_furo": 0.041666666666666664,
    "carros_agendados": 128,
    "pct_agendado": 0.927536231884058,
    "pct_chegou_adiantado": 0.2916666666666667,
    "pct_chegou_no_horario": 0.13194444444444445,
    "pct_chegou_atrasado": 0.1111111111111111,
    "pct_entrou_adiantado": 0.2222222222222222,
    "pct_entrou_no_horario": 0.2986111111111111,
    "pct_entrou_atrasado": 0.3472222222222222,
    "meta": 0.9
  },
  "viagens": [
    {
      "dt": "6103358350",
      "data_carregamento": "2026-08-01",
      "placa": "SAV4A80",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103374457",
      "data_carregamento": "2026-08-05",
      "placa": "SAV4A80",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103396475",
      "data_carregamento": "2026-08-11",
      "placa": "SAV4A80",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103401580",
      "data_carregamento": "2026-08-13",
      "placa": "SAV4A80",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103415336",
      "data_carregamento": "2026-08-18",
      "placa": "SAV4A80",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103417966",
      "data_carregamento": "2026-08-15",
      "placa": "RYM7A88",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "SEM INFORMACAO",
      "transportadora": "TELHA SUL",
      "motorista": "EMERSON",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103422744",
      "data_carregamento": "2026-08-19",
      "placa": "RYM7A88",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 0,
      "pct_checkin": 0.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.0,
      "cluster_esp": "Sem check-in e sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "TELHA SUL",
      "motorista": "EMERSON",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103442021",
      "data_carregamento": "2026-08-22",
      "placa": "RYM7A88",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "TELHA SUL",
      "motorista": "EMERSON",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103442066",
      "data_carregamento": "2026-08-22",
      "placa": "RYM7A88",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "TELHA SUL",
      "motorista": "EMERSON",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103449094",
      "data_carregamento": "2026-08-26",
      "placa": "RYM7A88",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "TELHA SUL",
      "motorista": "EMERSON",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103390893",
      "data_carregamento": "2026-08-11",
      "placa": "RYC7D72",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "TELHA SUL",
      "motorista": "RONDINELLI",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103412937",
      "data_carregamento": "2026-08-15",
      "placa": "RYC7D72",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "TELHA SUL",
      "motorista": "RONDINELLI",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103422828",
      "data_carregamento": "2026-08-20",
      "placa": "RYC7D72",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "TELHA SUL",
      "motorista": "RONDINELLI",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103435428",
      "data_carregamento": "2026-08-21",
      "placa": "RYC7D72",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "TELHA SUL",
      "motorista": "RONDINELLI",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103441927",
      "data_carregamento": "2026-08-24",
      "placa": "RYC7D72",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "TELHA SUL",
      "motorista": "RONDINELLI",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103458302",
      "data_carregamento": "2026-08-28",
      "placa": "RYC7D72",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "TELHA SUL",
      "motorista": "RONDINELLI",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103366419",
      "data_carregamento": "2026-08-01",
      "placa": "ROL0B11",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "TELHA SUL",
      "motorista": "JURANDIR",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103404053",
      "data_carregamento": "2026-08-12",
      "placa": "ROL0B11",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 0,
      "pct_checkin": 0.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.0,
      "cluster_esp": "Sem check-in e sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "TELHA SUL",
      "motorista": "JURANDIR",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103415335",
      "data_carregamento": "2026-08-18",
      "placa": "ROL0B11",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 0,
      "pct_checkin": 0.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.0,
      "cluster_esp": "Sem check-in e sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "TELHA SUL",
      "motorista": "JURANDIR",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103431265",
      "data_carregamento": "2026-08-21",
      "placa": "ROL0B11",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "TELHA SUL",
      "motorista": "JURANDIR",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103441733",
      "data_carregamento": "2026-08-25",
      "placa": "ROL0B11",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "TELHA SUL",
      "motorista": "JURANDIR",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103378695",
      "data_carregamento": "2026-08-05",
      "placa": "RIF0J97",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "ANTONIO CARLOS MENESES ONOFRE",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103399373",
      "data_carregamento": "2026-08-11",
      "placa": "RIF0J97",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "ANTONIO CARLOS MENESES ONOFRE",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103401621",
      "data_carregamento": "2026-08-13",
      "placa": "RIF0J97",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "ANTONIO CARLOS MENESES ONOFRE",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103427893",
      "data_carregamento": "2026-08-20",
      "placa": "RIF0J97",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "ANTONIO CARLOS MENESES ONOFRE",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103435365",
      "data_carregamento": "2026-08-22",
      "placa": "RIF0J97",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "ANTONIO CARLOS MENESES ONOFRE",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103453747",
      "data_carregamento": "2026-08-27",
      "placa": "RIF0J97",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "ANTONIO CARLOS MENESES ONOFRE",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103458166",
      "data_carregamento": "2026-08-28",
      "placa": "RIF0J97",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "ANTONIO CARLOS MENESES ONOFRE",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103427894",
      "data_carregamento": "2026-08-20",
      "placa": "RID4F06",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "DIEGO LINEKER PAULINO AZEVEDO",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103431264",
      "data_carregamento": "2026-08-23",
      "placa": "RID4F06",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "DIEGO LINEKER PAULINO AZEVEDO",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103435803",
      "data_carregamento": "2026-08-23",
      "placa": "RID4F06",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 0,
      "pct_checkin": 0.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 0.5,
      "cluster_esp": "Sem check-in",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "DIEGO LINEKER PAULINO AZEVEDO",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103449164",
      "data_carregamento": "2026-08-26",
      "placa": "RID4F06",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "DIEGO LINEKER PAULINO AZEVEDO",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103460109",
      "data_carregamento": "2026-08-28",
      "placa": "RID4F06",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "DIEGO LINEKER PAULINO AZEVEDO",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103433099",
      "data_carregamento": "2026-08-20",
      "placa": "QFS3J11",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "VELTEC",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103390637",
      "data_carregamento": "2026-08-11",
      "placa": "POX8094",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103407647",
      "data_carregamento": "2026-08-16",
      "placa": "POX8094",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103409633",
      "data_carregamento": "2026-08-19",
      "placa": "POX8094",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103422789",
      "data_carregamento": "2026-08-19",
      "placa": "POX8094",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103374419",
      "data_carregamento": "2026-08-05",
      "placa": "POM2638",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "JOSE HAILTOM MACEDO DE OLIVEIRA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103389070",
      "data_carregamento": "2026-08-08",
      "placa": "POM2638",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "JOSE HAILTOM MACEDO DE OLIVEIRA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103398028",
      "data_carregamento": "2026-08-11",
      "placa": "POM2638",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "JOSE HAILTOM MACEDO DE OLIVEIRA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103427859",
      "data_carregamento": "2026-08-20",
      "placa": "POM2638",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "JOSE HAILTOM MACEDO DE OLIVEIRA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103453791",
      "data_carregamento": "2026-08-27",
      "placa": "POM2638",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "JOSE HAILTOM MACEDO DE OLIVEIRA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103405247",
      "data_carregamento": "2026-08-14",
      "placa": "POL4046",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "FRANCISCO MAVINIER PEDROSA DO NASCIMENTO",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103427778",
      "data_carregamento": "2026-08-20",
      "placa": "POL4046",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "FRANCISCO MAVINIER PEDROSA DO NASCIMENTO",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103459493",
      "data_carregamento": "2026-08-27",
      "placa": "POL4046",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem leitura de espelhamento na Origem",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "FRANCISCO MAVINIER PEDROSA DO NASCIMENTO",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103461903",
      "data_carregamento": "2026-08-29",
      "placa": "POL4046",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "FRANCISCO MAVINIER PEDROSA DO NASCIMENTO",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103383392",
      "data_carregamento": "2026-08-07",
      "placa": "POH0491",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "PAULO FELIPE CAMELO MESQUITA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103401636",
      "data_carregamento": "2026-08-13",
      "placa": "POH0491",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "PAULO FELIPE CAMELO MESQUITA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103415641",
      "data_carregamento": "2026-08-18",
      "placa": "POH0491",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "PAULO FELIPE CAMELO MESQUITA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103435366",
      "data_carregamento": "2026-08-23",
      "placa": "POH0491",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "PAULO FELIPE CAMELO MESQUITA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103453786",
      "data_carregamento": "2026-08-27",
      "placa": "POH0491",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "PAULO FELIPE CAMELO MESQUITA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103367256",
      "data_carregamento": "2026-08-04",
      "placa": "PNR9H86",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem leitura de espelhamento na Origem",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "JEFFERSON FURNO JUNIOR",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103380918",
      "data_carregamento": "2026-08-07",
      "placa": "PNR9H86",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "JEFFERSON FURNO JUNIOR",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103390627",
      "data_carregamento": "2026-08-11",
      "placa": "PNR9H86",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "JEFFERSON FURNO JUNIOR",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103401616",
      "data_carregamento": "2026-08-13",
      "placa": "PNR9H86",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "JEFFERSON FURNO JUNIOR",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103422829",
      "data_carregamento": "2026-08-19",
      "placa": "PNR9H86",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "JEFFERSON FURNO JUNIOR",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103431912",
      "data_carregamento": "2026-08-21",
      "placa": "PNR9H86",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "JEFFERSON FURNO JUNIOR",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103449157",
      "data_carregamento": "2026-08-26",
      "placa": "PNR9H86",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "JEFFERSON FURNO JUNIOR",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103367092",
      "data_carregamento": "2026-08-05",
      "placa": "PNR8046",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "ROBERIO MENDES RIBEIRO",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103376610",
      "data_carregamento": "2026-08-06",
      "placa": "PNR8046",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "ROBERIO MENDES RIBEIRO",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103385249",
      "data_carregamento": "2026-08-09",
      "placa": "PNR8046",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem leitura de espelhamento na Origem",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "ROBERIO MENDES RIBEIRO",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103398278",
      "data_carregamento": "2026-08-12",
      "placa": "PNR8046",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "ROBERIO MENDES RIBEIRO",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103405252",
      "data_carregamento": "2026-08-14",
      "placa": "PNR8046",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "ROBERIO MENDES RIBEIRO",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103415379",
      "data_carregamento": "2026-08-17",
      "placa": "PNR8046",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "ROBERIO MENDES RIBEIRO",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103427860",
      "data_carregamento": "2026-08-20",
      "placa": "PNR8046",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "ROBERIO MENDES RIBEIRO",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103431844",
      "data_carregamento": "2026-08-21",
      "placa": "PNR8046",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "ROBERIO MENDES RIBEIRO",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103450206",
      "data_carregamento": "2026-08-26",
      "placa": "PNR8046",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "ROBERIO MENDES RIBEIRO",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103458275",
      "data_carregamento": "2026-08-28",
      "placa": "PNR8046",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "ROBERIO MENDES RIBEIRO",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103449210",
      "data_carregamento": "2026-08-25",
      "placa": "PMX7E42",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "EDICARLOS ROCHA SANTOS",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103453748",
      "data_carregamento": "2026-08-27",
      "placa": "PMX7E42",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "EDICARLOS ROCHA SANTOS",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103461909",
      "data_carregamento": "2026-08-30",
      "placa": "PMX7E42",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "EDICARLOS ROCHA SANTOS",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103358247",
      "data_carregamento": "2026-08-02",
      "placa": "PMX7D82",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103360254",
      "data_carregamento": "2026-08-03",
      "placa": "PMX7912",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "FRANCISCO JOSE BALBINO PEREIRA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103382085",
      "data_carregamento": "2026-08-06",
      "placa": "PMX7912",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "FRANCISCO JOSE BALBINO PEREIRA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103385248",
      "data_carregamento": "2026-08-09",
      "placa": "PMX7912",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "FRANCISCO JOSE BALBINO PEREIRA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103411587",
      "data_carregamento": "2026-08-14",
      "placa": "PMX7912",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "FRANCISCO JOSE BALBINO PEREIRA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103422946",
      "data_carregamento": "2026-08-19",
      "placa": "PMX7912",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem leitura de espelhamento na Origem",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "FRANCISCO JOSE BALBINO PEREIRA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103435431",
      "data_carregamento": "2026-08-22",
      "placa": "PMX7912",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "FRANCISCO JOSE BALBINO PEREIRA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103390889",
      "data_carregamento": "2026-08-10",
      "placa": "PMX7552",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "WALLAS DE ALCANTARA DE SOUSA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103398283",
      "data_carregamento": "2026-08-12",
      "placa": "PMX7552",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "WALLAS DE ALCANTARA DE SOUSA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103408315",
      "data_carregamento": "2026-08-14",
      "placa": "PMX7552",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 0,
      "pct_checkin": 0.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 0.5,
      "cluster_esp": "Sem check-in",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "WALLAS DE ALCANTARA DE SOUSA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103415377",
      "data_carregamento": "2026-08-18",
      "placa": "PMX7552",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 0,
      "pct_checkin": 0.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.0,
      "cluster_esp": "Sem check-in e sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "WALLAS DE ALCANTARA DE SOUSA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103459325",
      "data_carregamento": "2026-08-26",
      "placa": "PMX7552",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "WALLAS DE ALCANTARA DE SOUSA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103461906",
      "data_carregamento": "2026-08-29",
      "placa": "PMX7552",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "WALLAS DE ALCANTARA DE SOUSA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103389068",
      "data_carregamento": "2026-08-08",
      "placa": "PMU8E21",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "VELTEC",
      "transportadora": "PORTARE",
      "motorista": "CARLOS JOSE DE ARAUJO OLIVEIRA FILHO",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103390941",
      "data_carregamento": "2026-08-11",
      "placa": "PMU8E21",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "VELTEC",
      "transportadora": "PORTARE",
      "motorista": "CARLOS JOSE DE ARAUJO OLIVEIRA FILHO",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103427762",
      "data_carregamento": "2026-08-20",
      "placa": "PMU8E21",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "VELTEC",
      "transportadora": "PORTARE",
      "motorista": "CARLOS JOSE DE ARAUJO OLIVEIRA FILHO",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103433897",
      "data_carregamento": "2026-08-21",
      "placa": "PMU8E21",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "VELTEC",
      "transportadora": "PORTARE",
      "motorista": "CARLOS JOSE DE ARAUJO OLIVEIRA FILHO",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103441875",
      "data_carregamento": "2026-08-24",
      "placa": "PMU8E21",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "CARLOS JOSE DE ARAUJO OLIVEIRA FILHO",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103449126",
      "data_carregamento": "2026-08-26",
      "placa": "PMU8E21",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "VELTEC-BRAZIL",
      "transportadora": "PORTARE",
      "motorista": "CARLOS JOSE DE ARAUJO OLIVEIRA FILHO",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103453800",
      "data_carregamento": "2026-08-27",
      "placa": "PMU8E21",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "VELTEC-BRAZIL",
      "transportadora": "PORTARE",
      "motorista": "CARLOS JOSE DE ARAUJO OLIVEIRA FILHO",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103461704",
      "data_carregamento": "2026-08-30",
      "placa": "PMU8E21",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "VELTEC-BRAZIL",
      "transportadora": "PORTARE",
      "motorista": "CARLOS JOSE DE ARAUJO OLIVEIRA FILHO",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103371775",
      "data_carregamento": "2026-08-05",
      "placa": "PMU7G31",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103389069",
      "data_carregamento": "2026-08-07",
      "placa": "PMU7G31",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103391000",
      "data_carregamento": "2026-08-10",
      "placa": "PMO5I18",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "FRANCISCO CLEBIO DOS SANTOS PENHA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103398211",
      "data_carregamento": "2026-08-12",
      "placa": "PMO5I18",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "FRANCISCO CLEBIO DOS SANTOS PENHA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103409634",
      "data_carregamento": "2026-08-16",
      "placa": "PMO5I18",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "FRANCISCO CLEBIO DOS SANTOS PENHA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103422788",
      "data_carregamento": "2026-08-19",
      "placa": "PMO5I18",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "FRANCISCO CLEBIO DOS SANTOS PENHA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103441879",
      "data_carregamento": "2026-08-25",
      "placa": "PMO5I18",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "FRANCISCO CLEBIO DOS SANTOS PENHA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103461950",
      "data_carregamento": "2026-08-29",
      "placa": "PMO5I18",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "FRANCISCO CLEBIO DOS SANTOS PENHA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103461595",
      "data_carregamento": "2026-08-30",
      "placa": "PMO5I18",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "FRANCISCO CLEBIO DOS SANTOS PENHA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103366108",
      "data_carregamento": "2026-08-01",
      "placa": "FWC7C63",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "TELHA SUL",
      "motorista": "JEFERSON",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103374293",
      "data_carregamento": "2026-08-05",
      "placa": "FWC7C63",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "TELHA SUL",
      "motorista": "JEFERSON",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103390944",
      "data_carregamento": "2026-08-10",
      "placa": "FWC7C63",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "TELHA SUL",
      "motorista": "JEFERSON",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103405241",
      "data_carregamento": "2026-08-14",
      "placa": "FWC7C63",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "TELHA SUL",
      "motorista": "JEFERSON",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103398029",
      "data_carregamento": "2026-08-15",
      "placa": "FWC7C63",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "TELHA SUL",
      "motorista": "JEFERSON",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103435433",
      "data_carregamento": "2026-08-23",
      "placa": "FWC7C63",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "SEM INFORMACAO",
      "transportadora": "TELHA SUL",
      "motorista": "JEFERSON",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103441905",
      "data_carregamento": "2026-08-25",
      "placa": "FWC7C63",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "TELHA SUL",
      "motorista": "JEFERSON",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103457907",
      "data_carregamento": "2026-08-28",
      "placa": "FWC7C63",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "TELHA SUL",
      "motorista": "JEFERSON",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103409635",
      "data_carregamento": "2026-08-15",
      "placa": "BAF4G09",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "JOÃO CARLOS MORORO DE PAIVA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103427827",
      "data_carregamento": "2026-08-20",
      "placa": "BAF4G09",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "JOÃO CARLOS MORORO DE PAIVA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103453649",
      "data_carregamento": "2026-08-27",
      "placa": "BAF4G09",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "JOÃO CARLOS MORORO DE PAIVA",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103366158",
      "data_carregamento": "2026-08-01",
      "placa": "BAF4G06",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "JOSE RAIMUNDO SANTANA DE JESUS",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103441721",
      "data_carregamento": "2026-08-25",
      "placa": "BAF4G06",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "JOSE RAIMUNDO SANTANA DE JESUS",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103453790",
      "data_carregamento": "2026-08-27",
      "placa": "BAF4G06",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem leitura de espelhamento na Origem",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "JOSE RAIMUNDO SANTANA DE JESUS",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103461907",
      "data_carregamento": "2026-08-29",
      "placa": "BAF4G06",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "PORTARE",
      "motorista": "JOSE RAIMUNDO SANTANA DE JESUS",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103363336",
      "data_carregamento": "2026-08-03",
      "placa": "BAF4G04",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 1,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103378869",
      "data_carregamento": "2026-08-06",
      "placa": "BAF4G04",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103398309",
      "data_carregamento": "2026-08-10",
      "placa": "BAF4G04",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Espelhado",
      "is_espelhado": 1,
      "score_esp": 1.0,
      "cluster_esp": "Check-in e espelhamento ok",
      "rastreador": "MOTORA",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103401624",
      "data_carregamento": "2026-08-13",
      "placa": "BAF4G04",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "MOTORA",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103363369",
      "data_carregamento": "2026-08-04",
      "placa": "S/ Placa",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "SEM INFORMACAO",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103367096",
      "data_carregamento": "2026-08-04",
      "placa": "S/ Placa",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "SEM INFORMACAO",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103369889",
      "data_carregamento": "2026-08-04",
      "placa": "S/ Placa",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "SEM INFORMACAO",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103383154",
      "data_carregamento": "2026-08-06",
      "placa": "S/ Placa",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "SEM INFORMACAO",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103380881",
      "data_carregamento": "2026-08-07",
      "placa": "S/ Placa",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "SEM INFORMACAO",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103380915",
      "data_carregamento": "2026-08-07",
      "placa": "S/ Placa",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "SEM INFORMACAO",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103383077",
      "data_carregamento": "2026-08-07",
      "placa": "S/ Placa",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "SEM INFORMACAO",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103385289",
      "data_carregamento": "2026-08-09",
      "placa": "S/ Placa",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 1,
      "pct_checkin": 1.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.5,
      "cluster_esp": "Sem espelhamento",
      "rastreador": "SEM INFORMACAO",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103409688",
      "data_carregamento": "2026-08-15",
      "placa": "S/ Placa",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 0,
      "pct_checkin": 0.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.0,
      "cluster_esp": "Sem check-in e sem espelhamento",
      "rastreador": "SEM INFORMACAO",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103409687",
      "data_carregamento": "2026-08-16",
      "placa": "S/ Placa",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 0,
      "pct_checkin": 0.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.0,
      "cluster_esp": "Sem check-in e sem espelhamento",
      "rastreador": "SEM INFORMACAO",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103409719",
      "data_carregamento": "2026-08-16",
      "placa": "S/ Placa",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 0,
      "pct_checkin": 0.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.0,
      "cluster_esp": "Sem check-in e sem espelhamento",
      "rastreador": "SEM INFORMACAO",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103431263",
      "data_carregamento": "2026-08-21",
      "placa": "S/ Placa",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 0,
      "pct_checkin": 0.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.0,
      "cluster_esp": "Sem check-in e sem espelhamento",
      "rastreador": "SEM INFORMACAO",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103435467",
      "data_carregamento": "2026-08-23",
      "placa": "S/ Placa",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 0,
      "pct_checkin": 0.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.0,
      "cluster_esp": "Sem check-in e sem espelhamento",
      "rastreador": "SEM INFORMACAO",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    },
    {
      "dt": "6103441829",
      "data_carregamento": "2026-08-25",
      "placa": "S/ Placa",
      "cod_sap": "10006794",
      "revenda": "DISSOBEL/SOBRAL(CE)",
      "checkin_antecipado": 0,
      "checkin_realizado": 0,
      "pct_checkin": 0.0,
      "espelhamento": "Nao Espelhado",
      "is_espelhado": 0,
      "score_esp": 0.0,
      "cluster_esp": "Sem check-in e sem espelhamento",
      "rastreador": "SEM INFORMACAO",
      "transportadora": "DISSOBEL / Terceira",
      "motorista": "Não vinculado",
      "origem": "Outras / Direto",
      "destino": "DISSOBEL/SOBRAL(CE)",
      "paradas_maiores_20min": 0,
      "paradas_justificadas": 0,
      "checklist_saida": "Não informado",
      "checklist_retorno": "Não informado",
      "has_dts_record": false
    }
  ],
  "metas": {
    "agendamento": 0.9,
    "checkin_1h": 0.7,
    "espelhamento": 0.95
  }
};

let currentData = INITIAL_DATA;
let filteredTrips = [...INITIAL_DATA.viagens];

// Chart Instances
let timelineChartInstance = null;
let clustersChartInstance = null;
let carriersChartInstance = null;
let originsChartInstance = null;
let paradasChartInstance = null;

// Pagination state
let currentPage = 1;
const tripsPerPage = 15;

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initFilters();
  initTabs();
  initSearch();
  initExportAndPrint();
  applyFilters();
});

// Toast Feedback Helper
function showToast(message) {
  const toast = document.getElementById('toastAlert');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast) return;
  toastMsg.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// Clipboard Copy Helper
window.copyToClipboard = function(text, successMsg) {
  if (!text || text === '-') return;
  navigator.clipboard.writeText(text).then(() => {
    showToast(successMsg || 'Texto copiado para a área de transferência!');
  }).catch(err => {
    console.error('Erro ao copiar:', err);
    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast(successMsg || 'Texto copiado!');
  });
};

// Theme Toggle
function initTheme() {
  const toggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  const themeText = document.getElementById('themeText');
  
  const savedTheme = localStorage.getItem('scorepuxada_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeButton(savedTheme);

  toggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('scorepuxada_theme', newTheme);
    updateThemeButton(newTheme);
    updateAllCharts();
  });

  function updateThemeButton(theme) {
    if (theme === 'dark') {
      themeIcon.textContent = '☀️';
      themeText.textContent = 'Modo Claro';
    } else {
      themeIcon.textContent = '🌙';
      themeText.textContent = 'Modo Escuro';
    }
  }
}

// Initialize Filters
function initFilters() {
  const startDateInput = document.getElementById('filterStartDate');
  const endDateInput = document.getElementById('filterEndDate');
  const transportadoraSelect = document.getElementById('filterTransportadora');
  const origemSelect = document.getElementById('filterOrigem');
  const globalToggle = document.getElementById('globalOnlyFailuresToggle');
  const globalToggleWrapper = document.getElementById('globalFailureToggleWrapper');
  const resetBtn = document.getElementById('resetFiltersBtn');

  // Local Ofensores Toggles
  const toggleBelowCheckin = document.getElementById('toggleOnlyBelowCheckin');
  const toggleBelowCheckinWrapper = document.getElementById('toggleOnlyBelowCheckinWrapper');
  const toggleBelowEsp = document.getElementById('toggleOnlyBelowEsp');
  const toggleBelowEspWrapper = document.getElementById('toggleOnlyBelowEspWrapper');

  const dates = currentData.viagens
    .map(v => v.data_carregamento)
    .filter(Boolean)
    .sort();
  
  const minDate = dates[0] || '2026-08-01';
  const maxDate = dates[dates.length - 1] || '2026-08-30';

  startDateInput.min = minDate;
  startDateInput.max = maxDate;
  startDateInput.value = minDate;

  endDateInput.min = minDate;
  endDateInput.max = maxDate;
  endDateInput.value = maxDate;

  // Populate Origins
  const origins = [...new Set(currentData.viagens.map(v => v.origem).filter(Boolean))].sort();
  origemSelect.innerHTML = '<option value="all">Todas as Origens</option>';
  origins.forEach(orig => {
    const opt = document.createElement('option');
    opt.value = orig;
    opt.textContent = orig;
    origemSelect.appendChild(opt);
  });

  // Preset Chips
  document.querySelectorAll('.preset-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.preset-chip').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const preset = chip.dataset.preset;
      if (preset === 'all') {
        startDateInput.value = minDate;
        endDateInput.value = maxDate;
      } else if (preset === 'q1') {
        startDateInput.value = '2026-08-01';
        endDateInput.value = '2026-08-15';
      } else if (preset === 'q2') {
        startDateInput.value = '2026-08-16';
        endDateInput.value = '2026-08-31';
      } else if (preset === 'last7') {
        startDateInput.value = '2026-08-24';
        endDateInput.value = maxDate;
      }
      applyFilters();
    });
  });

  startDateInput.addEventListener('change', () => { clearPresetActive(); applyFilters(); });
  endDateInput.addEventListener('change', () => { clearPresetActive(); applyFilters(); });
  transportadoraSelect.addEventListener('change', applyFilters);
  origemSelect.addEventListener('change', applyFilters);

  // Global Toggle Listener
  globalToggle.addEventListener('change', () => {
    if (globalToggle.checked) {
      globalToggleWrapper.classList.add('active');
    } else {
      globalToggleWrapper.classList.remove('active');
    }
    applyFilters();
  });

  // Local Ofensores Toggles
  if (toggleBelowCheckin) {
    toggleBelowCheckin.addEventListener('change', () => {
      toggleBelowCheckinWrapper.classList.toggle('active', toggleBelowCheckin.checked);
      renderOfensoresPanel();
    });
  }

  if (toggleBelowEsp) {
    toggleBelowEsp.addEventListener('change', () => {
      toggleBelowEspWrapper.classList.toggle('active', toggleBelowEsp.checked);
      renderOfensoresPanel();
    });
  }

  resetBtn.addEventListener('click', () => {
    startDateInput.value = minDate;
    endDateInput.value = maxDate;
    transportadoraSelect.value = 'all';
    origemSelect.value = 'all';
    globalToggle.checked = false;
    globalToggleWrapper.classList.remove('active');
    document.querySelectorAll('.preset-chip').forEach(c => c.classList.remove('active'));
    document.querySelector('.preset-chip[data-preset="all"]').classList.add('active');
    applyFilters();
  });

  function clearPresetActive() {
    document.querySelectorAll('.preset-chip').forEach(c => c.classList.remove('active'));
  }
}

// Apply Filters and Recompute Everything
function applyFilters() {
  const startDate = document.getElementById('filterStartDate').value;
  const endDate = document.getElementById('filterEndDate').value;
  const transportadora = document.getElementById('filterTransportadora').value;
  const origem = document.getElementById('filterOrigem').value;
  const onlyFailures = document.getElementById('globalOnlyFailuresToggle').checked;

  filteredTrips = currentData.viagens.filter(trip => {
    if (trip.data_carregamento) {
      if (startDate && trip.data_carregamento < startDate) return false;
      if (endDate && trip.data_carregamento > endDate) return false;
    }

    if (transportadora !== 'all') {
      if (transportadora === 'PORTARE' && !trip.transportadora.includes('PORTARE')) return false;
      if (transportadora === 'TELHA SUL' && !trip.transportadora.includes('TELHA SUL')) return false;
      if (transportadora === 'DISSOBEL / Terceira' && (trip.transportadora.includes('PORTARE') || trip.transportadora.includes('TELHA SUL'))) return false;
    }

    if (origem !== 'all' && trip.origem !== origem) {
      return false;
    }

    // Global Failure Filter
    if (onlyFailures) {
      const isFailed = (trip.checkin_antecipado === 0 || trip.is_espelhado === 0);
      if (!isFailed) return false;
    }

    return true;
  });

  updateSummaryBadges();
  updateScoreAndCards();
  updateAllCharts();
  renderOfensoresPanel();
  renderCarriersSummary();
  renderDriversRanking();
  renderDtsOperations();
  currentPage = 1;
  renderTripsTable();
}

function updateSummaryBadges() {
  const total = currentData.viagens.length;
  const selected = filteredTrips.length;
  document.getElementById('selectedTripsCount').textContent = selected;
  document.getElementById('totalTripsCount').textContent = total;
  document.getElementById('heroTripsCount').textContent = selected;
}

// Update Master Score de Puxada and Slide Cards
function updateScoreAndCards() {
  const total = filteredTrips.length;

  const ag = currentData.agendamento_summary;
  const agPct = ag.pct_agendado || 0.927536;
  const agPctStr = (agPct * 100).toFixed(2) + '%';
  const agPctShort = (agPct * 100).toFixed(1) + '%';

  const checkinOkCount = filteredTrips.filter(t => t.checkin_antecipado === 1).length;
  const checkinPct = total > 0 ? (checkinOkCount / total) : 0;
  const checkinPctStr = (checkinPct * 100).toFixed(2) + '%';
  const checkinPctShort = (checkinPct * 100).toFixed(1) + '%';

  const sumScoreEsp = filteredTrips.reduce((acc, t) => {
    if (t.score_esp !== undefined && t.score_esp !== null && !isNaN(t.score_esp)) return acc + Number(t.score_esp);
    if (t.is_espelhado === 1 || String(t.espelhamento || '').toLowerCase().includes('espelhado')) return acc + 1.0;
    if (t.checkin_realizado === 1 || t.checkin_antecipado === 1) return acc + 0.5;
    return acc;
  }, 0);
  const espPct = total > 0 ? (sumScoreEsp / total) : 0;
  const espPctStr = (espPct * 100).toFixed(2) + '%';
  const espPctShort = (espPct * 100).toFixed(1) + '%';

  const scoreGeral = (agPct + checkinPct + espPct) / 3;
  const scoreGeralStr = (scoreGeral * 100).toFixed(2) + '%';

  document.getElementById('masterScoreVal').textContent = scoreGeralStr;
  const masterStatus = document.getElementById('masterScoreStatus');
  if (scoreGeral >= 0.85) {
    masterStatus.textContent = '🟢 ACIMA DA META (85%)';
    masterStatus.className = 'status-text ok';
  } else {
    masterStatus.textContent = '🔴 ABAIXO DA META (85%)';
    masterStatus.className = 'status-text';
  }

  document.getElementById('formulaAgVal').textContent = agPctStr;
  document.getElementById('formulaCheckinVal').textContent = checkinPctStr;
  document.getElementById('formulaEspVal').textContent = espPctStr;
  document.getElementById('formulaResultVal').textContent = scoreGeralStr;

  document.getElementById('card1Val').textContent = agPctStr;
  document.getElementById('card2Val').textContent = checkinPctStr;
  document.getElementById('card3Val').textContent = espPctStr;

  document.getElementById('geoAgDissobelVal').textContent = agPctShort;
  document.getElementById('geoCheckinDissobelVal').textContent = checkinPctShort;
  document.getElementById('geoEspDissobelVal').textContent = espPctShort;

  const cardAg = document.getElementById('slideCardAg');
  const cardCheckin = document.getElementById('slideCardCheckin');
  const cardEsp = document.getElementById('slideCardEsp');

  cardAg.className = agPct >= 0.90 ? 'slide-top-card blue-card' : 'slide-top-card wine-card';
  cardCheckin.className = checkinPct >= 0.70 ? 'slide-top-card blue-card' : 'slide-top-card wine-card';
  cardEsp.className = espPct >= 0.95 ? 'slide-top-card blue-card' : 'slide-top-card wine-card';
}

// ==========================================================================
// PAINEL DE OFENSORES & DIAGNÓSTICO EXECUTIVO (COBRANÇA)
// ==========================================================================
function renderOfensoresPanel() {
  renderCarrierDiagnosisCards();
  renderOfensoresCheckinTable();
  renderOfensoresEspTable();
}

function renderCarrierDiagnosisCards() {
  const container = document.getElementById('carrierDiagnosisContainer');
  if (!container) return;

  const carriersMap = {};
  filteredTrips.forEach(t => {
    const c = t.transportadora || 'DISSOBEL / Terceira';
    if (!carriersMap[c]) {
      carriersMap[c] = {
        total: 0,
        checkin_fail: 0,
        esp_fail: 0,
        motoristas: new Set()
      };
    }
    carriersMap[c].total += 1;
    if (t.checkin_antecipado === 0) carriersMap[c].checkin_fail += 1;
    if (t.is_espelhado === 0) carriersMap[c].esp_fail += 1;
    if (t.motorista) carriersMap[c].motoristas.add(t.motorista);
  });

  let html = '';
  Object.keys(carriersMap).forEach(c => {
    const d = carriersMap[c];
    const totalMots = d.motoristas.size;
    const checkinFailPct = ((d.checkin_fail / d.total) * 100).toFixed(1);
    const espFailPct = ((d.esp_fail / d.total) * 100).toFixed(1);

    // Diagnostic logic
    const isSystemic = parseFloat(checkinFailPct) > 45 || parseFloat(espFailPct) > 40;
    const diagnosticBadge = isSystemic
      ? `<span class="carrier-diagnostic-badge systemic">⚠️ Problema Sistêmico da Transportadora (Taxa Alta de Falhas)</span>`
      : `<span class="carrier-diagnostic-badge punctual">🎯 Falhas Concentradas em Motoristas Específicos</span>`;

    html += `
      <div class="carrier-diagnosis-card">
        <div class="carrier-diagnosis-header">
          <h4>🚛 ${c}</h4>
          <span class="badge badge-neutral">${d.total} Viagens</span>
        </div>

        <div class="carrier-diagnosis-stats">
          <div class="stat-item">
            <span class="lbl">Motoristas Ativos</span>
            <span class="val">${totalMots} motoristas</span>
          </div>
          <div class="stat-item">
            <span class="lbl">Falhas Check-in &lt;1h</span>
            <span class="val" style="color:var(--color-danger);">${d.checkin_fail} (${checkinFailPct}%)</span>
          </div>
          <div class="stat-item">
            <span class="lbl">Falhas Espelhamento</span>
            <span class="val" style="color:var(--color-danger);">${d.esp_fail} (${espFailPct}%)</span>
          </div>
          <div class="stat-item">
            <span class="lbl">Cobrança Direta</span>
            <button class="btn btn-copy" onclick="copyCarrierSummary('${c}', ${d.total}, ${d.checkin_fail}, '${checkinFailPct}%', ${d.esp_fail}, '${espFailPct}%')">
              📋 Copiar Resumo
            </button>
          </div>
        </div>

        ${diagnosticBadge}
      </div>
    `;
  });

  container.innerHTML = html || '<p style="color:var(--text-muted);">Nenhuma transportadora nos filtros atuais.</p>';
}

window.copyCarrierSummary = function(carrier, total, cFail, cFailPct, eFail, eFailPct) {
  const text = `*COBRANÇA DE PUXADA AMBEV — ${carrier}*
Total de Viagens: ${total}
• Falhas Check-in >1h: ${cFail} viagens (${cFailPct})
• Falhas Espelhamento: ${eFail} viagens (${eFailPct})
Favor alinhar com a equipe para atingimento das metas (>70% check-in e >95% espelhamento).`;
  copyToClipboard(text, `Resumo da ${carrier} copiado para envio!`);
};

function renderOfensoresCheckinTable() {
  const tbody = document.querySelector('#ofensoresCheckinTable tbody');
  const onlyBelow = document.getElementById('toggleOnlyBelowCheckin')?.checked;
  if (!tbody) return;

  const driversMap = {};
  filteredTrips.forEach(t => {
    const key = (t.motorista || 'Não Vinculado') + '_' + (t.placa || 'S/P');
    if (!driversMap[key]) {
      driversMap[key] = {
        motorista: t.motorista || 'Não Vinculado',
        placa: t.placa || 'S/ Placa',
        transportadora: t.transportadora || 'DISSOBEL / Terceira',
        total: 0,
        checkin_fail: 0
      };
    }
    driversMap[key].total += 1;
    if (t.checkin_antecipado === 0) {
      driversMap[key].checkin_fail += 1;
    }
  });

  let list = Object.values(driversMap);

  // Compute rates
  list.forEach(d => {
    d.fail_pct = (d.checkin_fail / d.total) * 100;
    d.success_pct = 100 - d.fail_pct;
  });

  // Filter if toggle active (meta: success < 70% / fail > 30%)
  if (onlyBelow) {
    list = list.filter(d => d.success_pct < 70);
  }

  // Sort by raw volume of failures (contagem bruta descendente)
  list.sort((a, b) => b.checkin_fail - a.checkin_fail || b.fail_pct - a.fail_pct);

  let html = '';
  list.forEach(d => {
    const cobrançaText = `${d.motorista} (${d.placa}, ${d.transportadora}) — ${d.checkin_fail} viagens com check-in <1h no período (${d.success_pct.toFixed(0)}% aderência / meta >70%)`;
    
    html += `
      <tr>
        <td><strong>${d.motorista}</strong><br><code style="font-size:11px;">${d.placa}</code></td>
        <td>${d.transportadora}</td>
        <td>${d.total}</td>
        <td><span class="ofensor-fail-badge">${d.checkin_fail}</span></td>
        <td style="color:var(--color-danger); font-weight:700;">${d.fail_pct.toFixed(1)}%</td>
        <td style="font-weight:700;">${d.success_pct.toFixed(1)}%</td>
        <td>
          <button class="btn btn-copy" onclick="copyToClipboard('${cobrançaText.replace(/'/g, "\'")}', 'Mensagem de cobrança copiada!')" title="Copiar texto de cobrança para WhatsApp/Teams">
            📋 Copiar
          </button>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html || '<tr><td colspan="7" style="text-align:center; padding:18px;">Nenhum ofensor de check-in encontrado nos filtros</td></tr>';
}

function renderOfensoresEspTable() {
  const tbody = document.querySelector('#ofensoresEspTable tbody');
  const onlyBelow = document.getElementById('toggleOnlyBelowEsp')?.checked;
  if (!tbody) return;

  const driversMap = {};
  filteredTrips.forEach(t => {
    const key = (t.motorista || 'Não Vinculado') + '_' + (t.placa || 'S/P');
    if (!driversMap[key]) {
      driversMap[key] = {
        motorista: t.motorista || 'Não Vinculado',
        placa: t.placa || 'S/ Placa',
        transportadora: t.transportadora || 'DISSOBEL / Terceira',
        total: 0,
        esp_fail: 0
      };
    }
    driversMap[key].total += 1;
    if (t.is_espelhado === 0) {
      driversMap[key].esp_fail += 1;
    }
  });

  let list = Object.values(driversMap);

  // Compute rates
  list.forEach(d => {
    d.fail_pct = (d.esp_fail / d.total) * 100;
    d.success_pct = 100 - d.fail_pct;
  });

  // Filter if toggle active (meta: success < 95% / fail > 5%)
  if (onlyBelow) {
    list = list.filter(d => d.success_pct < 95);
  }

  // Sort by raw volume of failures (contagem bruta descendente)
  list.sort((a, b) => b.esp_fail - a.esp_fail || b.fail_pct - a.fail_pct);

  let html = '';
  list.forEach(d => {
    const cobrançaText = `${d.motorista} (${d.placa}, ${d.transportadora}) — ${d.esp_fail} viagens não espelhadas no período (${d.success_pct.toFixed(0)}% aderência / meta >95%)`;
    
    html += `
      <tr>
        <td><strong>${d.motorista}</strong><br><code style="font-size:11px;">${d.placa}</code></td>
        <td>${d.transportadora}</td>
        <td>${d.total}</td>
        <td><span class="ofensor-fail-badge">${d.esp_fail}</span></td>
        <td style="color:var(--color-danger); font-weight:700;">${d.fail_pct.toFixed(1)}%</td>
        <td style="font-weight:700;">${d.success_pct.toFixed(1)}%</td>
        <td>
          <button class="btn btn-copy" onclick="copyToClipboard('${cobrançaText.replace(/'/g, "\'")}', 'Mensagem de cobrança copiada!')" title="Copiar texto de cobrança para WhatsApp/Teams">
            📋 Copiar
          </button>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html || '<tr><td colspan="7" style="text-align:center; padding:18px;">Nenhum ofensor de espelhamento encontrado nos filtros</td></tr>';
}

// Initialize Tabs
function initTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab-content-panel').forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetId = btn.dataset.tab;
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
        window.dispatchEvent(new Event('resize'));
      }
    });
  });
}

// Charts Management
function updateAllCharts() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  const textColor = isDark ? '#94a3b8' : '#475569';
  const gridColor = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)';

  renderTimelineChart(textColor, gridColor);
  renderClustersChart(textColor);
  renderCarriersChart(textColor, gridColor);
  renderOriginsChart(textColor, gridColor);
  renderParadasChart(textColor, gridColor);
}

function getTripScoreEsp(t) {
  if (t.score_esp !== undefined && t.score_esp !== null && !isNaN(t.score_esp)) return Number(t.score_esp);
  if (t.is_espelhado === 1 || String(t.espelhamento || '').toLowerCase().includes('espelhado')) return 1.0;
  if (t.checkin_realizado === 1 || t.checkin_antecipado === 1) return 0.5;
  return 0.0;
}

function renderTimelineChart(textColor, gridColor) {
  const ctx = document.getElementById('timelineChart');
  if (!ctx) return;

  const agPct = currentData.agendamento_summary.pct_agendado || 0.927536;

  const dateMap = {};
  filteredTrips.forEach(t => {
    const d = t.data_carregamento || 'S/ Data';
    if (!dateMap[d]) {
      dateMap[d] = { total: 0, checkin_ok: 0, esp_score: 0 };
    }
    dateMap[d].total += 1;
    if (t.checkin_antecipado === 1) dateMap[d].checkin_ok += 1;
    dateMap[d].esp_score += getTripScoreEsp(t);
  });

  const sortedDates = Object.keys(dateMap).sort();
  const labels = sortedDates.map(d => {
    const parts = d.split('-');
    return parts.length === 3 ? parts[2] + '/' + parts[1] : d;
  });

  const checkinData = sortedDates.map(d => (dateMap[d].checkin_ok / dateMap[d].total) * 100);
  const espData = sortedDates.map(d => (dateMap[d].esp_score / dateMap[d].total) * 100);
  const scoreData = sortedDates.map((d, i) => ((agPct * 100) + checkinData[i] + espData[i]) / 3);
  const totalTrips = sortedDates.map(d => dateMap[d].total);

  if (timelineChartInstance) timelineChartInstance.destroy();

  timelineChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Score de Puxada Diário (%)',
          data: scoreData,
          borderColor: '#10b981',
          backgroundColor: 'rgba(16, 185, 129, 0.12)',
          borderWidth: 3,
          tension: 0.3,
          pointRadius: 5,
          pointHoverRadius: 7,
          yAxisID: 'y'
        },
        {
          label: 'Check-in > 1h (%)',
          data: checkinData,
          borderColor: '#f8af00',
          borderDash: [4, 4],
          borderWidth: 2,
          tension: 0.2,
          pointRadius: 3,
          yAxisID: 'y'
        },
        {
          label: 'Espelhamento (%)',
          data: espData,
          borderColor: '#3b82f6',
          borderDash: [4, 4],
          borderWidth: 2,
          tension: 0.2,
          pointRadius: 3,
          yAxisID: 'y'
        },
        {
          label: 'Viagens Carregadas',
          data: totalTrips,
          type: 'bar',
          backgroundColor: 'rgba(100, 116, 139, 0.22)',
          borderRadius: 4,
          yAxisID: 'y1'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          position: 'top',
          labels: { color: textColor, font: { weight: 600, size: 12 } }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              if (context.dataset.yAxisID === 'y') {
                return context.dataset.label + ': ' + context.parsed.y.toFixed(1) + '%';
              }
              return context.dataset.label + ': ' + context.parsed.y + ' viagens';
            }
          }
        }
      },
      scales: {
        x: {
          grid: { color: gridColor },
          ticks: { color: textColor }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          min: 0,
          max: 100,
          grid: { color: gridColor },
          ticks: {
            color: textColor,
            callback: value => value + '%'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          grid: { drawOnChartArea: false },
          ticks: {
            color: textColor,
            stepSize: 2
          }
        }
      }
    }
  });
}

function renderClustersChart(textColor) {
  const ctx = document.getElementById('clustersChart');
  if (!ctx) return;

  const clusterCounts = {};
  filteredTrips.forEach(t => {
    const c = t.cluster_esp || 'Outros';
    clusterCounts[c] = (clusterCounts[c] || 0) + 1;
  });

  const labels = Object.keys(clusterCounts);
  const data = Object.values(clusterCounts);

  if (clustersChartInstance) clustersChartInstance.destroy();

  clustersChartInstance = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: [
          '#10b981',
          '#ef4444',
          '#b91c1c',
          '#f8af00',
          '#64748b'
        ],
        borderWidth: 2,
        borderColor: document.documentElement.getAttribute('data-theme') === 'dark' ? '#111827' : '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: textColor, font: { size: 11 } }
        }
      }
    }
  });
}

function renderCarriersChart(textColor, gridColor) {
  const ctx = document.getElementById('carriersChart');
  if (!ctx) return;

  const agPct = currentData.agendamento_summary.pct_agendado || 0.927536;

  const carriersMap = {};
  filteredTrips.forEach(t => {
    const c = t.transportadora || 'DISSOBEL / Terceira';
    if (!carriersMap[c]) {
      carriersMap[c] = { total: 0, checkin_ok: 0, esp_score: 0 };
    }
    carriersMap[c].total += 1;
    if (t.checkin_antecipado === 1) carriersMap[c].checkin_ok += 1;
    carriersMap[c].esp_score += getTripScoreEsp(t);
  });

  const labels = Object.keys(carriersMap);
  const checkinPcts = labels.map(l => (carriersMap[l].checkin_ok / carriersMap[l].total) * 100);
  const espPcts = labels.map(l => (carriersMap[l].esp_score / carriersMap[l].total) * 100);
  const scorePcts = labels.map((l, i) => ((agPct * 100) + checkinPcts[i] + espPcts[i]) / 3);

  if (carriersChartInstance) carriersChartInstance.destroy();

  carriersChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Score de Puxada (%)',
          data: scorePcts,
          backgroundColor: '#10b981',
          borderRadius: 6
        },
        {
          label: '% Check-in > 1h',
          data: checkinPcts,
          backgroundColor: '#f8af00',
          borderRadius: 6
        },
        {
          label: '% Espelhamento',
          data: espPcts,
          backgroundColor: '#3b82f6',
          borderRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { grid: { color: gridColor }, ticks: { color: textColor } },
        y: {
          min: 0,
          max: 100,
          grid: { color: gridColor },
          ticks: { color: textColor, callback: val => val + '%' }
        }
      },
      plugins: {
        legend: { position: 'top', labels: { color: textColor } }
      }
    }
  });
}

function renderOriginsChart(textColor, gridColor) {
  const ctx = document.getElementById('originsChart');
  if (!ctx) return;

  const originsMap = {};
  filteredTrips.forEach(t => {
    const o = t.origem || 'Outras / Direto';
    originsMap[o] = (originsMap[o] || 0) + 1;
  });

  const labels = Object.keys(originsMap);
  const data = Object.values(originsMap);

  if (originsChartInstance) originsChartInstance.destroy();

  originsChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Viagens Realizadas',
        data: data,
        backgroundColor: '#0050d8',
        borderRadius: 6
      }]
    },
    options: {
      indexAxis: 'y',
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { grid: { color: gridColor }, ticks: { color: textColor } },
        y: { grid: { color: gridColor }, ticks: { color: textColor } }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });
}

function renderParadasChart(textColor, gridColor) {
  const ctx = document.getElementById('paradasChart');
  if (!ctx) return;

  const paradasTrips = filteredTrips
    .filter(t => t.paradas_maiores_20min > 0)
    .sort((a, b) => b.paradas_maiores_20min - a.paradas_maiores_20min)
    .slice(0, 10);

  const labels = paradasTrips.map(t => 'DT ' + t.dt.slice(-6) + ' (' + (t.placa || 'S/P') + ')');
  const data = paradasTrips.map(t => t.paradas_maiores_20min);

  if (paradasChartInstance) paradasChartInstance.destroy();

  paradasChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: 'Qtd de Paradas > 20 min',
        data: data,
        backgroundColor: '#ef4444',
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { grid: { color: gridColor }, ticks: { color: textColor, font: { size: 10 } } },
        y: { grid: { color: gridColor }, ticks: { color: textColor, stepSize: 2 } }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });
}

// Render Carriers Summary Table
function renderCarriersSummary() {
  const tbody = document.querySelector('#carriersSummaryTable tbody');
  if (!tbody) return;

  const agPct = currentData.agendamento_summary.pct_agendado || 0.927536;
  const agPctDisplay = (agPct * 100).toFixed(1) + '%';

  const carriersMap = {};
  filteredTrips.forEach(t => {
    const c = t.transportadora || 'DISSOBEL / Terceira';
    if (!carriersMap[c]) {
      carriersMap[c] = { total: 0, checkin_ok: 0, esp_score: 0 };
    }
    carriersMap[c].total += 1;
    if (t.checkin_antecipado === 1) carriersMap[c].checkin_ok += 1;
    carriersMap[c].esp_score += getTripScoreEsp(t);
  });

  let html = '';
  Object.keys(carriersMap).forEach(c => {
    const d = carriersMap[c];
    const checkinPctVal = (d.checkin_ok / d.total);
    const espPctVal = (d.esp_score / d.total);
    const scorePuxadaVal = (agPct + checkinPctVal + espPctVal) / 3;

    const checkinPct = (checkinPctVal * 100).toFixed(1) + '%';
    const espPct = (espPctVal * 100).toFixed(1) + '%';
    const scorePuxada = (scorePuxadaVal * 100).toFixed(2) + '%';

    const statusBadge = scorePuxadaVal >= 0.85
      ? '<span class="badge badge-success">🟢 Meta Atingida (≥85%)</span>'
      : '<span class="badge badge-danger">🔴 Abaixo da Meta</span>';

    html += `<tr>
      <td><strong>${c}</strong></td>
      <td>${d.total}</td>
      <td>${agPctDisplay}</td>
      <td>${checkinPct}</td>
      <td>${espPct}</td>
      <td><span class="score-tag-badge">${scorePuxada}</span></td>
      <td>${statusBadge}</td>
    </tr>`;
  });

  tbody.innerHTML = html;
}

// Render Drivers Ranking
function renderDriversRanking() {
  const tbody = document.querySelector('#driversTable tbody');
  const search = (document.getElementById('driverSearchInput')?.value || '').toLowerCase();
  if (!tbody) return;

  const agPct = currentData.agendamento_summary.pct_agendado || 0.927536;

  const driversMap = {};
  filteredTrips.forEach(t => {
    const driver = t.motorista || 'Não Vinculado';
    const key = driver + '_' + t.placa;
    if (!driversMap[key]) {
      driversMap[key] = {
        motorista: driver,
        placa: t.placa || 'S/ Placa',
        transportadora: t.transportadora || 'DISSOBEL / Terceira',
        total: 0,
        checkin_ok: 0,
        esp_score: 0,
        paradas_20m: 0
      };
    }
    driversMap[key].total += 1;
    if (t.checkin_antecipado === 1) driversMap[key].checkin_ok += 1;
    driversMap[key].esp_score += getTripScoreEsp(t);
    driversMap[key].paradas_20m += (t.paradas_maiores_20min || 0);
  });

  let list = Object.values(driversMap);
  if (search) {
    list = list.filter(d => 
      d.motorista.toLowerCase().includes(search) || 
      d.placa.toLowerCase().includes(search) || 
      d.transportadora.toLowerCase().includes(search)
    );
  }

  list.forEach(d => {
    const cVal = d.checkin_ok / d.total;
    const eVal = d.esp_score / d.total;
    d.scoreVal = (agPct + cVal + eVal) / 3;
    d.scorePuxada = (d.scoreVal * 100).toFixed(1) + '%';
    d.checkinPct = (cVal * 100).toFixed(0) + '%';
    d.espPct = (eVal * 100).toFixed(0) + '%';
  });

  list.sort((a, b) => b.scoreVal - a.scoreVal || b.total - a.total);

  let html = '';
  list.forEach(d => {
    const isTopPerformer = d.scoreVal >= 0.85;
    const statusBadge = isTopPerformer 
      ? '<span class="badge badge-success">⭐ Top Performance</span>' 
      : (d.scoreVal >= 0.70 
          ? '<span class="badge badge-warning">Regular</span>' 
          : '<span class="badge badge-danger">Atenção</span>');

    html += `<tr>
      <td><strong>${d.motorista}</strong></td>
      <td><code>${d.placa}</code></td>
      <td>${d.transportadora}</td>
      <td>${d.total}</td>
      <td>${d.checkin_ok} (${d.checkinPct})</td>
      <td>${d.esp_ok} (${d.espPct})</td>
      <td><span class="score-tag-badge">${d.scorePuxada}</span></td>
      <td>${d.paradas_20m}</td>
      <td>${statusBadge}</td>
    </tr>`;
  });

  tbody.innerHTML = html || '<tr><td colspan="9" style="text-align:center;">Nenhum motorista encontrado</td></tr>';
}

// Render DTS Operations Summary
function renderDtsOperations() {
  const dtsTrips = filteredTrips.filter(t => t.has_dts_record);
  const totalMapped = dtsTrips.length;
  const totalParadas = dtsTrips.reduce((acc, t) => acc + (t.paradas_maiores_20min || 0), 0);
  const viagensComParadas = dtsTrips.filter(t => t.paradas_maiores_20min > 0).length;
  const pctViagensComParadas = totalMapped > 0 ? ((viagensComParadas / totalMapped) * 100).toFixed(1) + '%' : '0%';

  document.getElementById('dtsTotalMapped').textContent = totalMapped;
  document.getElementById('dtsTotalParadas').textContent = totalParadas;
  document.getElementById('dtsViagensComParadas').textContent = viagensComParadas + ' (' + pctViagensComParadas + ')';
}

// Render Trips Table with Search, Motivo/Cobrança and Pagination
function renderTripsTable() {
  const tbody = document.querySelector('#tripsTable tbody');
  const search = (document.getElementById('tripSearchInput')?.value || '').toLowerCase();
  const pageInfo = document.getElementById('pageInfo');
  if (!tbody) return;

  let list = filteredTrips;
  if (search) {
    list = list.filter(t => 
      t.dt.toLowerCase().includes(search) || 
      t.placa.toLowerCase().includes(search) || 
      t.motorista.toLowerCase().includes(search) ||
      t.origem.toLowerCase().includes(search) ||
      t.transportadora.toLowerCase().includes(search)
    );
  }

  const totalPages = Math.max(Math.ceil(list.length / tripsPerPage), 1);
  if (currentPage > totalPages) currentPage = totalPages;
  if (currentPage < 1) currentPage = 1;

  pageInfo.textContent = `Página ${currentPage} de ${totalPages} (${list.length} registros)`;

  const startIdx = (currentPage - 1) * tripsPerPage;
  const pageTrips = list.slice(startIdx, startIdx + tripsPerPage);

  let html = '';
  pageTrips.forEach(t => {
    const checkinBadge = t.checkin_antecipado === 1 
      ? '<span class="badge badge-success">🟢 > 1h (OK)</span>' 
      : (t.checkin_realizado === 1 
          ? '<span class="badge badge-warning">⚠️ &lt; 1h</span>' 
          : '<span class="badge badge-danger">🔴 Sem Check-in</span>');

    const espBadge = t.is_espelhado === 1 
      ? '<span class="badge badge-success">🟢 Espelhado</span>' 
      : '<span class="badge badge-danger">🔴 Não Espelhado</span>';

    const paradasDisplay = t.paradas_maiores_20min > 0 
      ? `<span class="badge badge-danger">${t.paradas_maiores_20min}</span>` 
      : `<span class="badge badge-neutral">0</span>`;

    // Texto de cobrança gerado automaticamente
    let motivoTexto = '-';
    if (t.checkin_antecipado === 0 && t.is_espelhado === 0) {
      motivoTexto = `${t.motorista} (${t.placa}, ${t.transportadora}) — check-in <1h e não espelhado`;
    } else if (t.checkin_antecipado === 0) {
      motivoTexto = `${t.motorista} (${t.placa}, ${t.transportadora}) — check-in <1h`;
    } else if (t.is_espelhado === 0) {
      motivoTexto = `${t.motorista} (${t.placa}, ${t.transportadora}) — não espelhado`;
    }

    const isNonConform = motivoTexto !== '-';
    const motivoDisplay = isNonConform 
      ? `<span style="color:var(--color-danger); font-weight:600; font-size:12px;">${motivoTexto}</span>` 
      : `<span style="color:var(--text-muted); font-size:12px;">Conforme</span>`;

    const actionBtn = isNonConform 
      ? `<button class="btn btn-copy" onclick="copyToClipboard('${motivoTexto.replace(/'/g, "\'")}', 'Texto da viagem copiado!')" title="Copiar texto pronto para cobrança">📋 Copiar</button>` 
      : `-`;

    html += `<tr>
      <td>${t.data_carregamento}</td>
      <td><strong>${t.dt}</strong></td>
      <td><code>${t.placa}</code></td>
      <td>${t.motorista}</td>
      <td>${t.transportadora}</td>
      <td>${checkinBadge}</td>
      <td>${espBadge}</td>
      <td>${motivoDisplay}</td>
      <td>${paradasDisplay}</td>
      <td>${actionBtn}</td>
    </tr>`;
  });

  tbody.innerHTML = html || '<tr><td colspan="10" style="text-align:center;">Nenhuma viagem encontrada com os filtros atuais</td></tr>';
}

// Search & Pagination Listeners
function initSearch() {
  const driverInput = document.getElementById('driverSearchInput');
  const tripInput = document.getElementById('tripSearchInput');
  const prevBtn = document.getElementById('prevPageBtn');
  const nextBtn = document.getElementById('nextPageBtn');

  if (driverInput) {
    driverInput.addEventListener('input', () => renderDriversRanking());
  }

  if (tripInput) {
    tripInput.addEventListener('input', () => {
      currentPage = 1;
      renderTripsTable();
    });
  }

  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderTripsTable();
      }
    });

    nextBtn.addEventListener('click', () => {
      const search = (document.getElementById('tripSearchInput')?.value || '').toLowerCase();
      let list = filteredTrips;
      if (search) {
        list = list.filter(t => 
          t.dt.toLowerCase().includes(search) || 
          t.placa.toLowerCase().includes(search) || 
          t.motorista.toLowerCase().includes(search)
        );
      }
      const totalPages = Math.ceil(list.length / tripsPerPage);
      if (currentPage < totalPages) {
        currentPage++;
        renderTripsTable();
      }
    });
  }
}

// Export CSV & Print
function initExportAndPrint() {
  const exportBtn = document.getElementById('exportCsvBtn');
  const printBtn = document.getElementById('printReportBtn');

  if (exportBtn) {
    exportBtn.addEventListener('click', exportToCsv);
  }

  if (printBtn) {
    printBtn.addEventListener('click', () => window.print());
  }
}

function exportToCsv() {
  if (!filteredTrips || filteredTrips.length === 0) {
    alert('Nenhum dado disponível para exportação.');
    return;
  }

  const headers = ['Data Carregamento', 'DT', 'Placa', 'Motorista', 'Transportadora', 'Origem', 'Destino', 'Check-in Antecipado (>1h)', 'Check-in Realizado', 'Espelhamento', 'Score Espelhamento', 'Texto Cobranca / Motivo', 'Paradas > 20min'];
  
  const csvRows = [headers.join(';')];
  filteredTrips.forEach(t => {
    let motivoTexto = 'Conforme';
    if (t.checkin_antecipado === 0 && t.is_espelhado === 0) {
      motivoTexto = `${t.motorista} (${t.placa}, ${t.transportadora}) — check-in <1h e não espelhado`;
    } else if (t.checkin_antecipado === 0) {
      motivoTexto = `${t.motorista} (${t.placa}, ${t.transportadora}) — check-in <1h`;
    } else if (t.is_espelhado === 0) {
      motivoTexto = `${t.motorista} (${t.placa}, ${t.transportadora}) — não espelhado`;
    }

    const row = [
      t.data_carregamento,
      t.dt,
      t.placa,
      `"${t.motorista}"`,
      `"${t.transportadora}"`,
      `"${t.origem}"`,
      `"${t.destino}"`,
      t.checkin_antecipado === 1 ? 'SIM' : 'NAO',
      t.checkin_realizado === 1 ? 'SIM' : 'NAO',
      t.espelhamento,
      t.score_esp,
      `"${motivoTexto}"`,
      t.paradas_maiores_20min
    ];
    csvRows.push(row.join(';'));
  });

  const blob = new Blob(['\uFEFF' + csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `score_puxada_dissobel_${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
