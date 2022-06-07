import LevelsService from "./levels.js";
import StatesService from "./main.js";

var states = new StatesService();
var levels = new LevelsService();
var RawExportedKeys = [];
var RawExportedData = [];

var DataObj = [
    "000A010010012002002008001002",
    "002J011000011021011000000000",
    "010D090067008000004016000000",
    "005_272536350272272802002006",
    "006Z272272272272272002002002",
    "{SETENGLISHANDENTERPINENTRY",
    "031D901001000000000001000000",
    "{MANUALLANGUAGESELECTION",
    "035Y018112111905255000024036",
    "036Z000000000255000000000000",
    "037Y701112111905255000024038",
    "038Z000000000255000000000000",
    "039Y702112111905255000024040",
    "040Z000000000255000000000000",
    "041Y703112111905255000024042",
    "042Z000000000255000000000000",
    "043Y704112111905255000024044",
    "044Z000000000255000000000000",
    "045Y705112111905255000024046",
    "046Z000000000255000000000000",
    "{ABNPINENTRY",
    "050B015112111059010016059003",
    "055B016112111059010016059003",
    "{MakeBufferequaltoPINValidationcode",
    "059_060600350700061002002062",
    "060D937067066060000000000000",
    "061D937067000060066000000000",
    "062Z060060060060060002002002",
    "{---ASADADDFLOWFORLOCALVISAEMV",
    "937/090630631938000000000000",
    "938Z939939939939939939939000",
    "939?089001006031000000000000",
    "{Loop-Back:STARTPINRETRY",
    "063;064278000000000000000000",
    "064/090630631065000000000000",
    "065Z278002002002002002002000",
    "{ABNDOYOUWANTRECEIPT",
    "085E085112111255255090090005",
    "{ABNMAKERECEIPTBUFFERASYESANDSENDTRANSACTIONREQUEST:",
    "086D090255000000032000000000",
    "{SENDTRANSACTIONREQUESTCOMMONTOALL",
    "090I090119001001001001001003",
    "089I090119001000001001129087",
    "087Z003000000000000000001000",
    "084Z001000000000000000001000",
    "088I090119001001001001129084",
    "{SendPINValidationRequestToPhoenix",
    "091I091119001001001001001003{STransactionRequest",
    "{VARIOUSCLOSESTATE",
    "092J120000120021120000000000{DTransactionReversed",
    "093J154000154154000000000000{SPINEXHAUSTED:UAECAPTURE",
    "094J072000072021000000000000{SNormalCash:UAESWClose",
    "095J117000117021000000000000{SINCOMPLETE:UAESWClose",
    "096J021000021021000000000000{SHOTCARD:UAESWClose",
    "097J116000116021000000000000{SWARMCARD:UAESWClose",
    "098J054000054054000000000000{SPINEXHAUSTED:UAECAPTURE",
    "099J099000089021000000000000{SNormalCashClose",
    "100J100000100021000000000000{SNormalClose",
    "101J105000105021000000000000{SHotCardClose",
    "102J106000106106000000000000{SExpiredCardClose",
    "103J103000103021000000000000{SGeneralDecline",
    "104J020000020020000000000000{SPINEXHAUSTEDCAPTURE",
    "105J101000101101000000000000{SOUTOFCASH",
    "106J095000095095000000000000{SNORECEIPTSAVAILABLE",
    "107J107000107021000000000000{SWARMCardClose",
    "108J107000107021000000000000{SBN_CLOSE",
    "109J109000110021000000000000{SUAECloseAfterB-INQUIRY",
    "110J240000240021240000000000{DCLOSEDFORTESTING",
    "111J111000111021000000000000{SCancel",
    "112J112000112021000000000000{STIMEOUT",
    "113J113000113021000000000000{STIMEOUT:UAEBILINGUAL",
    "114J114000114021000000000000{SCANCEL:UAEBILINGUAL",
    "115J115000115021000000000000{SNormalCloseUAESWITCH",
    "116J013000013021000000000000{SINVALIDCARD:UAESWITCH",
    "117J097000097021000000000000{SEXPIREDCARD:UAESWITCH",
    "118J118000118021118000000000{DTechnicalReasonDecline",
    "119J119000119021119000000000{DRejectWithGCCReceipt",
    "{VARIOUSPRIVATECHAINSTATES\t120-136",
    "{NON-CASHSERVICESCHAININGDONE",
    "120Y230112111121255002012255{SChainingonNonCashTxns",
    "121W100100149100100100100100{SFDKSwitch",
    "{CHAININGONNONCASHWITHSCREENUPDATE",
    "122Y231112111123255002012255{SChainingonNonCashTxns",
    "123W100100150100100100100100{SFDKSwitch",
    "{CHAININGONTXNDECLINEWITHUPDATEMESSAGE",
    "124Y234112111125255002012255{SChainingonNonCashTxns",
    "125W100100149100100100100100{SFDKSwitch",
    "{CHAININGONATMOUTOFCASH",
    "126Y126112111127255002012255{SChainingonNonCashTxns",
    "127W100100150100100100100100{SFDKSwitch",
    "{PROMPTIFRECEIPTARENOTAVAILABLE",
    "128E128112111255255131150005{SReceiptPrompt",
    "{128E128112111255255202150005{SReceiptPrompt202->ToSendBufferU,VforSecurePinChange",
    "{BALANCEONSCREENWITHOPTIONTOPRINTRECEIPT",
    "129E706112111255255090135004{SBALDISPLAY:ASKRECEIPT",
    "130E204112111255255150100004{SBALDISPLAY:NORCPT",
    "{131D090223000000000032000000{SPresetBufXXXXXDXX",
    "131D985223000000000032000000{SPresetBufXXXXXDXX",
    "132E128112111255255139100005{",
    "{CHAININGONCASHDECLINEWITHUPDATEMESSAGE",
    //"133Y051112111134255002012255{SChainingonLowBalance",
    //"134W100100150100100100100100{SFDKSwitch",
    //"{CHAINOPTIONWITHNOUPDATEMESSAGE:TXNSUCCESSFUL,WANTANOTHER",
    //"135Y232112111136255002012255{SChainingonNonCashTxns",
    //"136W100100149100100100100100{SFDKSwitch",
    //"{VARIOUSREJECTSTATES\t136-149",
    //"{{ABNAMTREJECTED:DISPMINDENON,MAXAMOUNT:RETRY,CURRENCYA.RUPEES",
    //"137Y050112111138255004012255{SRetryforanotheramount",
    //"138W100100140150100100100100{SFDKSwitch",
    //"139D963223000000000032000000{",
    //"140D180099000004000000000141{SMAKEOPW/DWL:\tXXBXXXXX",
    //"141Z000000000000000000000000{ExtToPreSetOpCodeH",
    //"{{ABNLOWBAL,LIMITEXCEEDED:RETRY,CURRENCYA.RUPEES",
    //"142Y052112111138255004012255{SRetryforanotheramount",
    //"{CHAININGONTXNREJECTWITHUPDATEMESSAGE",
    //"144Y235112111125255002012255{SChainingonNonCashTxns",
    //"145W100100150100100100100100{SFDKSwitch",
    //"{USAGEMESSAGE",
    //"147E017112111255255225150006{SUSAGEMESSAGE",
    //"{FIXCurrencyCodeTo\"A\"andAccountCodeTo\"A\":SOHMODIFY",
    //"149_150002002356152002002153{SFITSWITCH",
    //"150D160067066000000000000000{SGoodPINXAbbbbAb",
    //"151D090067066000012000000000{FROM_ACCT_PIN",
    //"152D160067000000066000000000{SGoodPINXAbbbbAb",
    //"153Z150150150150150002002002{SFITSWITCH",
    //"{",
    //"{MAINMENUTRANSACTIONSELECTIONSCREEN",
    //"{160Y027112111161255002255255{SSelecttransIHGFDCBA",
    //"{161W168173200400300530550580{SFDKSwitch\tABCDFGHI",
    //"160Y027112111161255002255255{SSelecttransIHGFDCBA",
    //"161W168173997400300530549580{SFDKSwitch\tABCDFGHI",
    //"{",
    //"{",
    //"{---SA+:brac-pzm***Start:FASTCASH",
    //"{",
    //"168D090255000000008000000169{FromAcctDynamicselection",
    //"169Z004000000000000000000000{setTRANCODEFC^4Fastcash",
    //"{Now,ndccodewillreturnhere,fromTM_REPLYTAB",
    //"170D171227004000000000000000{SXXA^^XXX",
    //"171Y032112111172255003255255{SSelecttransXHGXDCBX",
    //"{CHANGINGALL090TO885",
    //"172W885885885150885885885885{SFDKSwitch.",
    //"{xxx---xxxEnd:FASTCASH",
    //"{",
    //"{",
    //"{---SA:brac-pzm***Start:WITHDRAWL",
    //"173D090227066000000000000174{FromAcctDynamicSelection",
    //"174Z004008000000000000000000{setTRANCODEFG^Withdrawl",
    //"{Controlcomesback,fromTM_REPLYTAB",
    //"177D178227000004000000000000{SXXB^^XXX4Withdrawl",
    //"{178F044112111255255085178159{SRupeeEntryNormalstatewithrcpt",
    //"{180F045112111255255085180159{SRupeeEntryRetrystatewithrcpt",
    //"{CHANGED090to881",
    //"178F044112111255255885178159{SRupeeEntryNormalstate",
    //"180F045112111255255090180159{SRupeeEntryRetrystate",
    //"{ForcePinStatesForIRIS5",
    //"192b034112111649194035035193{ForcePinEntrystate'b'-sheh",
    //"193Z001001000000000000000000{Extensionstatefor'b'-sheh",
    //"194Y037112111195255002012255{SChainingonPIN_CHREJ-sheh",
    //"195W100100995100100100100100{SFDKSwitch-sheh",
    //"196b034112111198194035035197",
    //"197Z001001000000000000000000",
    //"198I090118001001001001129199",
    //"199Z003000000048000000001000",
    //"",
    //"{xxx---xxxEnd:WITHDRAWL",
    //"{",
    //"{",
    //"{---STARTALHABIBPIN-CHANGE",
    //"200H034112111255255202200002{SEnterPINinbufferB",
    //"202H035112111255255090202000{SRe-enterPINinbufferC",
    //"212Y037112111213255002012255{SChainingonPIN_CHREJ",
    //"213W100100150100100100100100{SFDKSwitch",
    //"214J210000210021000000000000{SCloseOnSuccessfulPINCH",
    //"{IBFT-OFFUSFlowAddedByALIFYAH-ToBracBank-TCodeI1",
    //"388Y074112111389255002002255{ToBracBankToOtherBank",
    //"389W255459068255255255255255{Afterselectionof-toBRAC-toOtherBankXfr",
    //"459Y076112111460255002006255{DynamicselectionforXFR",
    //"460W266461302255255255459255{SelectionforXfrtoCardorAccount",
    //"464Y074112111460255002003255{DynamicselectionforXFR-AlifyahForIBFT",
    //"465W255255461205255255255{SelectionforXfrtoCardorAccount",
    //"461H077112111255255462461003{ToCARD-------entrystateBufferC",
    //"462F222112111255255009462161{Amountentrystate",
    //"463D154064004008000016000000{SetOpcodedetailsABD",
    //"{IBFT-OFFUSFlowAddedByALIFYAH-ToOtherBank-TCodeB1",
    //"068Y076112111069255002006255{ToOtherBank",
    //"069W255070073255255255255255{SelectionforXfrtoCardorAccount-Alifyah",
    //"070H077112111255255071070003{ToAcctentrystateBufferB-Alifyah",
    //"071F222112111255255468071161{Amountentrystate",
    //"425Y075112111426255000012000{ConfirmationScreenOffus",
    //"566Y967112111426255000012000{ConfirmationScreenOffus-ToCard",
    //"426W255255463253255255255255{ConfirmationScreenOffus-FDKSelec",
    //"072D487064004000000024000000{SetOpcodedetailsADD",
    //"073H965112111255076073074001{BankCodeEntryStateBufferC-Alifyah",
    //"074Y966112111075255000008000{StaticImageforBankCodes",
    //"075W255255255073255255255255{TOGOBACKTOBANKCODEENTERSCREEN",
    //"076H522112111255255077076003{ToAcctentrystateBufferB-Alifyah",
    //"077F222112111255255467077161{Amountentrystate",
    //"427Y075112111428255000012000{ConfirmationScreenOffus",
    //"008Y967112111143255000012000{ConfirmationScreenOffus-Tocard",
    //"428W255255072253255255255255{ConfirmationScreenOffus-FDKSelec",
    //"143W255255146253255255255255{ConfirmationScreenOffus-FDKSelec",
    //"146D154064004000000024000000{SetOpcodedetailsADD",
    //"431Y967112111432255000012000{ConfirmationScreenOffus-ToAccount",
    //"432W255255308253255255255255{ConfirmationScreenOffus-FDKSelec-Account",
    //"{End-Alifyah",
    //"{IBFT-ONUSFlowAddedByALIFYAH-ToCard",
    //"078Y076112111079255002006255{DynamicselectionforXFR-AlifyahForIBFT",
    //"079W255080081255255255255255{SelectionforXfrtoCardorAccount-Alifyah",
    //"080H077112111255255004080003{ToCARD---ONUSentrystateBufferB-Alifyah",
    //"004F222112111255255776004161{Amountentrystate",
    //"081H965112111255243081082001{BankCodeEntryStateBufferC-Alifyah",
    //"082Y966112111083255000008000{StaticImageforBankCodes",
    //"083W255255255081255255255255{TOGOBACKTOBANKCODEENTERSCREEN",
    //"{XFERMENU(1)OWN(2)3rdParty3PFT(3)OpenEnded",
    //"{Blocking3PFT,making2ndFDKdisabled.WritingNextstate(255)",
    //"{220Y518112111221255002165255{DynamicselectionforXFR",
    //"{IBFT-OFFUSFlowAddedByALIFYAH",
    //"220Y518112111221255002189255{DynamicselectionforXFR-Alifyah-ForAllFDKs",
    //"{221W222232245255255245232222{DynamicselectionforXFR",
    //"221W222232245078078245232222{DynamicselectionforXFR-Alifyah",
    //"207Y076112111208255002006255{DynamicselectionforXFR-AlifyahForIBFT",
    //"208W255209205255255255255255{SelectionforXfrtoCardorAccount-Alifyah",
    //"209H077112111255255210209003{ToCARD---entrystateBufferB-Alifyah",
    //"210F222112111255255776210161{Amountentrystate",
    //"{ConfirmationScreen-Alifyah",
    //"433Y075112111434255000012000{ConfirmationScreenOffus-CARDPRO",
    //"434W255255211253255255255255{ConfirmationScreenOffus-CARDPRO",
    //"655W255255657253255255255255{ConfirmationScreenOffus-CARDPRO",
    //"452Y967112111655255000012000{ConfirmationScreenOffus-CARDPRO",
    //"466D090066004000008016000000{SetOpcodedetailsACD-Onustoaccount",
    //"776D088066008016000004000000{SetOpcodedetailsDAB-OnustoCard",
    //"009D088066008000016004000000{SetOpcodedetailsDAC-OnustoCard",
    //"430D088067000000000028000000{SetOpcodedetailsDDD-",
    //"468D090066008016000004000000{SetOpcodedetailsDAB-offustooffus-tocard",
    //"467D090067004016008000000000{SetOpcodedetailsACD",
    //"211D487064004008000016000000{SetOpcodedetailsABD",
    //"657D154064004008000016000000{SetOpcodedetailsABD",
    //"{IBFT-ONUSFlowAddedByALIFYAH",
    //"241W255243302255255255255255{SelectionforXfrtoCardorAccount-Alifyah",
    //"243H522112111255255244243003{ToAcctentrystateBufferB-Alifyah",
    //"244F222112111255255466244161{Amountentrystate",
    //"246D486064004008000016000000{SetOpcodedetailsABD",
    //"654D154064004008000016000000{SetOpcodedetailsABD",
    //"{302H965112111255483302303031{BankCodeEntryStateBufferC-Alifyah--OFFUSFLOW",
    //"{303Y966112111308255000008000{StaticImageforBankCodes",
    //"{308W255255255302255255255255{TOGOBACKTOBANKCODEENTERSCREEN",
    //"205H965112111255483205206001{BankCodeEntryStateBufferC-Alifyahi",
    //"206Y966112111158255000008000{StaticImageforBankCodes",
    //"158W255255255205255255255255{TOGOBACKTOBANKCODEENTERSCREEN",
    //"482D090067000004000008000000{DynamicselectforXFRBD^-Alifyah",
    //"302H522112111255255303241003{ToAcctentrystateBufferB-Alifyah-FOROFFUSBBL(TOACC)",
    //"303F222112111255255430247161{Amountentrystate",
    //"308D154064002000000012000000{SetOpcodedetailsDDDTranCode-A1",
    //"483H522112111255255484483003{ToAcctentrystateBufferB-Alifyah-FOROFFUSBBL(TOACC)",
    //"484F222112111255255466247161{Amountentrystate",
    //"499Y075112111500255000012000{ConfirmationScreenOnus-Account",
    //"007Y967112111653255000012000{ConfirmationScreenOnus-Card",
    //"500W255255246253255255255255{ConfirmationScreenOnus-FDKSelect",
    //"653W255255654253255255255255{ConfirmationScreenOnus-FDKSelect",
    //"485D155064000012000000000000{SetOpcodedetailsBB^",
    //"{CHAININGONONUS-TXNREJECT",
    //"162Y234112111163255002012255{SchainingonIBFTFundTransfer-Alifyah",
    //"163W100100160253100100100100{SFDKSwitch",
    //"{CHAININGONOFF-US-TXNREJECT",
    //"164Y234112111165255002012255{SChainingonIBFTFundTransfer-Alifyah",
    //"165W100100355253100100100100{SFDKSwitch",
    //"{CHAININGONCardPro-TXNREJECT",
    //"166Y234112111167255002012255{SChainingonIBFTFundTransfer-Alifyah",
    //"167W100100645253100100100100{SFDKSwitch",
    //"{IBFT-AlifyahATMIF-ONUSFLOWEnd",
    //"222D090067066008004000000000",
    //"224F222112111255255225160161",
    //"225D987067066000008004000000",
    //"226Y520112111227255002024255",
    //"227W100100100160228100100100",
    //"228D987067066000000004000000",
    //"232D090067066000000000000233",
    //"233Z012000000000000000000000",
    //"234D235067066000000004000000",
    //"235F222112111255255236235161",
    //"236D090067074000000004000000",
    //"237Y520112111238255002024255",
    //"238W100100100160239100100100",
    //"239D987067066000000004000000",
    //"324D090327004008000000000000",
    //"325F222112111255255326325166",
    //"326D090067000024004000000000",
    //"327Z000000000004000000000000",
    //"328Y301112111329255002024255",
    //"329W100100100998150100100100",
    //"330D991015008004000000000331",
    //"331Z000000000000000000000000",
    //"435Y225112111436255007012255",
    //"436W255255150100255255255255",
    //"245H522112111255255247245003",
    //"247F222112111255255248247161",
    //"248D987067074000000004000000",
    //"249Y520112111238255002024255",
    //"250W100100100160251100100100",
    //"251D090067066000000132000000",
    //"253J099000089021000000000000",
    //"300D882227008000000000000301",
    //"301Z000004000000000000000000",
    //"304D985067000000000000000305",
    //"305Z004000000000000000000000",
    //"270+271005001000000000000000",
    //"271,090005005005005005000000",
    //"272+273287001000000000000000",
    //"273,090280287287118287118000",
    //"280.623281282283000000000000",
    //"281Z624625626627000000000000",
    //"282Z628004629005000000000000",
    //"283Z112111284284287287000000",
    //"284/090630631285000000000000",
    //"285Z286350350350350350286000",
    //"286k000287000000000000001002",
    //"287_031002002350031002002295",
    //"295Z900904908912916002002002",
    //"288;289355000000000000000000",
    //"289/090630631290000000000000",
    //"290Z355355355355355355355000",
    //"291/090630631292000000000000",
    //"292Z951951951951951951951000",
    //"293/090630631294000000000000",
    //"294Z952952952952952952952000",
    //"950?357001003000000000000000",
    //"951?089001002031000000000000",
    //"952?089001001031041000000000",
    //"350D267001000000000001000000",
    //"351B170112111355100016355003",
    //"352B016112111288100016288003",
    //"257m015112111259255255000255",
    //"259Z112921010923921003000001",
    //"260m015112111261255255000255",
    //"261Z112059010016059003000001",
    //"265m015112111266255255000255",
    //"266Z112640100016640003000001",
    //"267m170112111268255255000255",
    //"268Z112355100016355003000001",
    //"278m016112111279255255000255",
    //"279Z112059010016059003000001",
    //"274m016112111275255255000255",
    //"275Z112288100016288003000001",
    //"276m016112111277255255000255",
    //"277Z112546100016546003000001",
    //"360F213112111255255332360165",
    //"332D090067016000004000000255",
    //"334D335067002000004000000000",
    //"335?333001001000000000000000",
    //"333E333112111255255884111005",
    //"337?884001001000000000000000",
    //"336D337067002000004000000000",
    //"353E128112111255255358288005",
    //"358D359103000000000032000000",
    //"359;293090000000000000000000",
    //"355E046112111356356356356006",
    //"356D950067002000000000000000",
    //"357E191112111388934360291002{EditedbyAlifyahtoONFDK1",
    //"457D090067000008004000000000",
    //"361F214112111255255952361165",
    //"362E207112111255255288100004",
    //"363Y237112111364255002012255",
    //"364W100100288100100100100100",
    //"365Y238112111366255002012255",
    //"366W100100288100100100100100",
    //"367Y142112111369255004012255",
    //"368Y143112111369255004012255",
    //"369W100100370288100100100100",
    //"370D361099000000004000000371",
    //"371Z000000000000000000000000",
    //"372Y136112111373255002012255",
    //"373W100100288100100100100100",
    //"374E707112111255255090363004",
    //"375E207112111255255288100004",
    //"376D090223000000000032000000",
    //"400D090239000008000000000402",
    //"402Z004000000000000000000000",
    //"406D407003064000000000000000",
    //"407X510112111408409010220000",
    //"409Z000000000004000000000000",
    //"408W438255437735160255440220",
    //"412Y557112111413255004128255",
    //"413W225255255255255255255443",
    //"424E506112111255255160099000",
    //"437D090067000004008000000000",
    //"438D090067000004000000000439",
    //"439Z000000008000000000000000",
    //"440D090003088004000000000000",
    //"441D443067000004000000000442",
    //"777D445067064004000000000442",
    //"442Z000000004008000000000000",
    //"443H512112111255255444160003",
    //"444F513112111255255445160517",
    //"445D090255064000000000000000",
    //"446E514112111255255447160007",
    //"447D991239008004000000000000",
    //"448E559112111255255447160005",
    //"449J099000089021000000000000",
    //"451E506112111255255160099000",
    //"455Y558112111456255003128255",
    //"456W225255255255255255255443",
    //"470E506112111255255160099000",
    //"530D880227000008000000000531",
    //"531Z000004000000000000000000",
    //"534D984067000000000000000535",
    //"535Z000004000000000000000000",
    //"549_550002002002552002002560",
    //"550D090067066000000000000551",
    //"552D090067000000066000000551",
    //"551Z004000000008000000000000",
    //"553D983227066000000000000554",
    //"555D983227000000066000000554",
    //"556_553002002002555002002561",
    //"554Z000000004000000000000000",
    //"560Z550550550550550002002002",
    //"561Z553553553553553002002002",
    //"569D887067012000000000000000",
    //"570D889067004008000000000000",
    //"571D890067004000008000000000",
    //"572D892067004000000000000573",
    //"573Z008000000000000000000000",
    //"574D891067004000000000000575",
    //"575Z000008000000000000000000",
    //"576D888067004000000000000577",
    //"577Z000000008000000000000000",
    //"578D886067004000000000000579",
    //"579Z000000000008000000000000",
    //"580D090067008000004000000581",
    //"581Z004000000000000000000000",
    //"582D981227002000000000000590",
    //"584D981227000000002000000590",
    //"583_582002002002584000000585",
    //"585Z582582582582582000000590",
    //"590Z000000000004000000000000",
    //"536+537600001000000000000000",
    //"537,090538600600118600000000",
    //"538.623539540541000000000000",
    //"539Z624625626627000000000000",
    //"540Z628004629005000000000000",
    //"541Z112111542542600600000000",
    //"542/090630631543000000000000",
    //"543Z544600600600600600600000",
    //"544k000545000000000000001002",
    //"545K600600600600600600600600",
    //"546;547640000000000000000000",
    //"547/090630631548000000000000",
    //"548Z640640640640640640640000",
    //"562/090630631563000000000000",
    //"563Z951951951951951951951000",
    //"564/090630631565000000000000",
    //"565Z953953953953953953953000",
    //"953?089001001031041000000000",
    //"954/090630631955000000000000",
    //"955Z956956956956956956956000",
    //"956?089001001031041000000000",
    //"957/090630631958000000000000",
    //"958Z959959959959959959959000",
    //"959?647001003000000000000000",
    //"960/090630631961000000000000",
    //"961Z962962962962962962962000",
    //"962?089001004030040000000000",
    //"",
    //"{FOREMVIBFT-Alifyah-ToAccount",
    //"155/090630631156000000000000{CompleteICCAppSel",
    //"156Z157088088088088088088000{ExtensionForeign",
    //"157?088001004030040000000000{IBFTEMV",
    //"{FOREMVIBFT-Alifyah-ToCard",
    //"487/090630631488000000000000{CompleteICCAppSel",
    //"488Z489489489489489489489000{ExtensionForeign",
    //"489?089001004030040000000000{IBFTEMV",
    //"{Alifyah-End",
    //"972/090630631973000000000000",
    //"973Z974974974974974974974000",
    //"974?089001007031000000000000",
    //"975/090630631976000000000000",
    //"976Z977977977977977977977000",
    //"977?089001008031000000000000",
    //"978/090630631979000000000000",
    //"979Z980980980980980980980000",
    //"980?089001009031000000000000",
    //"988/090630631989000000000000",
    //"989Z990990990990990990990000",
    //"990?089001007030000000000000",
    //"981;562090000000000000000000",
    //"982;954090000000000000000000",
    //"983;972090000000000000000000",
    //"984;975090000000000000000000",
    //"985;978090000000000000000000",
    //"986;957957000000000000000000",
    //"987;988090000000000000000000",
    //"154;155155000000000000000000{IBFTRequestEMV-ToAccountAlifyah",
    //"486;487090000000000000000000{IBFTRequestEMV-CardAlifyah",
    //"600D265001000000000000000667",
    //"667Z001000000000000000000000",
    //"605Y018112111610255000024036",
    //"606Z000000000255000000000000",
    //"610B015112111640100016640003",
    //"615B016112111546100016546003",
    //"628E128112111255255629640005",
    //"629D635223000000000032000000",
    //"635;564090000000000000000000",
    //"640D645067002000000000000000",
    //"645Y174112111646255002254255",
    //"646W207675647706706647672090",
    //"647b034112111649651035035648",
    //"648Z001001000000000000000000",
    //"649I090118001001001001129650",
    //"650Z003000000048000000001000",
    //"651Y037112111652255002012255",
    //"652W100100640100100100100100",
    //"670J210000210021000000000000",
    //"672X999112111674673033255000",
    //"673Z002005010000020015003001",
    //"674W569570571640572574576578",
    //"675F044112111255255893675159",
    //"676F045112111255255089676159",
    //"678E204112111255255640100004",
    //"680Y232112111681255002012255",
    //"681W100100640100100100100100",
    //"684Y234112111685255002012255",
    //"685W100100546100100100100100",
    //"687Y052112111691255004012255",
    //"690Y050112111691255004012255",
    //"691W100100692546100100100100",
    //"692D676099000004000000000693",
    //"693Z000000000000000000000000",
    //"696Y126112111697255002012255",
    //"697W100100546100100100100100",
    //"735D736067000000004024000000",
    //"736H181112111255255737736003",
    //"737D325067000024004000000000",
    //"706D707003000000000000000000",
    //"707Y437112111708255002084255",
    //"708W762255761151640255740220",
    //"712E506112111255255640099000",
    //"724E506112111255255640099000",
    //"740D090067024004000000000000",
    //"741H512112111255255742640003",
    //"742F222112111255255743640161",
    //"743D635067000000000000000744",
    //"744Z000000004008000000000000",
    //"746E514112111255255747640005",
    //"747D960239008004000000000000",
    //"748E559112111255255747640005",
    //"749J099000089021000000000000",
    //"751E506112111255255640099000",
    //"755E506112111255255640099000",
    //"770E506112111255255640099000",
    //"761D090067000004008000000000",
    //"762D090067000004000000000763",
    //"763Z000000008000000000000000",
    //"765D090067024004000000000000",
    //"715Y557112111741255004128255",
    //"716W255255255255255255255743",
    //"716Y558112111741255003128255",
    //"774W255255255255255255255743",
    //"800D005000000000000000000000",
    //"802D808029002000000001000000",
    //"805Y605836835808807000012806",
    //"807Z000000004006000000000000",
    //"806Z000000000255000000000000",
    //"808H600836835255255810835001",
    //"810F604836835255255815835608",
    //"815H603836835255255826835003",
    //"820B601836835826840601826001",
    //"825B602836835830840602830001",
    //"826D090067070000008000000000",
    //"827E609112111255255830835004",
    //"830I090119001000001001001003",
    //"835J606000606021000000000000",
    //"836J610000112021000000000000",
    //"840J607000607021000000000000",
    //"845Y609836835850255002012255",
    //"850W255255855835255255255255",
    //"855D830227002012000000000000",
    //"860J611000089021000000000000",
    //"865J611000089021000000000000",
    //"866J103000103021000000000000",
    //"867E128112111255255869868005",
    //"868J099000089021000000000000",
    //"869D090095000000000032000000",
    //"881E700112111255255982982005",
    //"883E700112111255255090090005",
    //"884E700112111255255293293005",
    //"885D982255000000000032000255",
    //"886E700112111255255954954005",
    //"887E700112111255255954954005",
    //"888E700112111255255954954005",
    //"889E700112111255255954954005",
    //"890E700112111255255954954005",
    //"891E700112111255255954954005",
    //"892E700112111255255954954005",
    //"893E700112111255255564564005",
    //"870+871600001000000000000000",
    //"871,090872600600600600000000",
    //"872.623873874875000000000000",
    //"873Z624625626627000000000000",
    //"874Z628004629005000000000000",
    //"875Z112111876876118000000000",
    //"876/090630631877000000000000",
    //"877Z878031118118118118031000",
    //"878k000879000000000000001002",
    //"879K031031031031031031031031",
    //"811;812999000000000000000000",
    //"812/090630631813000000000000",
    //"813Z999999118118118118999000",
    //"816/090630631817000000000000",
    //"817Z951090118118118118090000",
    //"818/090630631817000000000000",
    //"819Z952090118118118118090000",
    //"880E708112111255255090160005",
    //"882E709112111255255090160005",
    //"900D050001012016000000000671",
    //"671Z001000000000000000000000",
    //"901D050001012016000000000668",
    //"668Z001000000000000000000000",
    //"904D050001012016000000000666",
    //"666Z001000000000000000000000",
    //"908D050001012016000000000669",
    //"669Z001000000000000000000000",
    //"912D050001012016000000000677",
    //"677Z001000000000000000000000",
    //"916D050001012016000000000679",
    //"679Z001000000000000000000000",
    //"905I090119001000001000000003",
    //"920B015112111921010923921003",
    //"921D937001012000016000000000",
    //"922I090119001000001000001003",
    //"923B016112111921010923921003",
    //"924Y234112111925255002012255",
    //"925W100100930100100100100100",
    //"930H034112111255255931930002",
    //"931H035112111255255932931000",
    //"932D933001012000000016000000",
    //"933I090119001000001000001003",
    //"934/090630631935000000000000",
    //"935Z936936936936936936936000",
    //"936?089001005031000000000000",
    //"940;941923000000000000000000",
    //"941/090630631942000000000000",
    //"942Z923002002002002002002000",
    //"991;960090000000000000000000",
    //"997D995099000000004000000371",
    //"192b034112111649194035035193",
    //"193Z001001000000000000000000",
    //"194Y037112111195255002012255",
    //"195W100100995100100100100100",
    //"196b034112111198194035035197",
    //"197Z001001000000000000000000",
    //"198I090118001001001001129199",
    //"199Z003000000048000000001000",
    //"995;992992000000000000000000",
    //"992/090630631993000000000000",
    //"993Z994994994994994994994000",
    //"994?192001003040040000000000",
    //"998D991015012000000000000999",
    //"999Z000016000000000000000000",
    //"963;964964000000000000000000",
    //"964/090630631965000000000000",
    //"965Z966966966966966966966000",
    //"966?649001003040040000000000",
    //"967D968099000000004000000371",
    //"968;969969000000000000000000",
    //"969/090630631970000000000000",
    //"970Z971971971971971971971000",
    //"971?196001003040040000000000"
]

var SanitizedObj = [];
for (var x = 0; x < DataObj.length; x++) {
    var TempHolder = DataObj[x].replace(/\ /g, '');
    SanitizedObj.push(TempHolder.replace("FS", ""));
}

for (var y = 0; y < SanitizedObj.length; y++) {
    states.addState(SanitizedObj[y]);
}

const options = {
    edges: {
        smooth: {
            type: 'continuous',
            forceDirection: 'horizontal',
            roundness: 0.5,
        }
    },
    layout: {
        improvedLayout: true,
        clusterThreshold: 50,
        hierarchical: {
            enabled: true,
            levelSeparation: 150,
            nodeSpacing: 150,
            treeSpacing: 150,
            blockShifting: false,
            edgeMinimization: true,
            parentCentralization: true,
            direction: 'UD',        // UD, DU, LR, RL
            sortMethod: 'hubsize',  // hubsize, directed
            shakeTowards: 'roots'  // roots, leaves
        }
    },
    physics: false,
    groups: {
        useDefaultGroups: true,
    },
    interaction: {
        dragNodes: true,
        dragView: true,
        hideEdgesOnDrag: false,
        hideEdgesOnZoom: false,
        hideNodesOnDrag: false,
        hover: true,
        hoverConnectedEdges: true,
        keyboard: {
            enabled: false,
            speed: { x: 10, y: 10, zoom: 0.02 },
            bindToWindow: true,
            autoFocus: true,
        },
        multiselect: false,
        navigationButtons: false,
        selectable: true,
        selectConnectedEdges: true,
        tooltipDelay: 300,
        zoomSpeed: 3,
        zoomView: true
    },
    physics: false,

};

let nodes = states.getNodes();
nodes.forEach(node => {
    node['size'] = 160;

    switch (node.label[4]) {
        case 'J':
            node['color'] = '#EF9A9A';
            break;

        case 'I':
            node['color'] = '#A5D6A7';
            break;

        default:
            node['color'] = '#EEEEEE';
    }

    node['shape'] = 'box';
    node['font'] = { 'size': '32', 'face': 'monospace', 'align': 'center' };
    node['heightConstraint'] = { minimum: 100 };
    node['widthConstraint'] = { minimum: 100 };
    node['choosen'] = "true";
});

let edges = states.getEdges();
edges.forEach(edge => {
    edge['arrows'] = 'to';
    edge['physics'] = false;
    edge['smooth'] = { 'type': 'cubicBezier' };
});

let container = document.getElementById('mynetwork');
let data = { 'nodes': nodes, 'edges': edges };
let graph = new vis.Network(container, data, options);

function BuildNewConnectionIDs() {

    var NodesList = nodes.get();

    $("#edge-id").html("");
    $("#edge-id").append(`<option value="-1" disabled selected>Select an option</option>`)

    for (var x = 0; x < NodesList.length; x++) {
        $("#edge-id").append(`<option value="${NodesList[x].id}">${NodesList[x].label}</option>`)
    }
}

// Add a new node
function addNode() {
    try {
        nodes.add({
            id: document.getElementById("node-id").value,
            label: document.getElementById("node-label").value,
        });

        //document.getElementById("node-id").value = nodes.get().length + 1;
        BuildNewConnectionIDs();
    } catch (err) {
        alert(err);
    }
}

// Update a node
function updateNode() {
    try {
        nodes.update({
            id: document.getElementById("node-id").value,
            label: document.getElementById("node-label").value,
        });
    } catch (err) {
        alert(err);
    }
}

// Remove a node
function removeNode() {
    try {
        //nodes.remove({ id: Number(document.getElementById("node-id").value) });
        nodes.remove(document.getElementById("node-id").value);
    } catch (err) {
        alert(err);
    }
}

// Add an edge
function addEdge() {
    try {
        edges.add({
            id: document.getElementById("edge-id").value,
            from: document.getElementById("edge-from").value,
            to: document.getElementById("edge-to").value,
        });
    } catch (err) {
        alert(err);
    }
}

// Update an edge
function updateEdge() {
    try {
        edges.update({
            id: document.getElementById("edge-id").value,
            from: document.getElementById("edge-from").value,
            to: document.getElementById("edge-to").value,
        });
    } catch (err) {
        alert(err);
    }
}

// Remove an edge
function removeEdge() {
    try {
        edges.remove({ id: document.getElementById("edge-id").value });
    } catch (err) {
        alert(err);
    }
}

function OnPageLoadTriggerBaseNode(nodeid) {

    var node = graph.body.nodes[nodeid];

    graph.focus(nodeid, { animation: true, scale: 0.4 });
    graph.selectNodes([nodeid]);

    $("#selectedNodeDetails").html("");

    for (const [key, value] of states.states[nodeid].entries()) {

        if (key == "screen_number") {
            $("#selectedNodeDetails").append(`
                <p>View Screen ><span>${value}</span> <span data-id="${value}" title="View Full Screen Image"  class="view-screen material-symbols-outlined"> search </span></p>
            `)
        }

        if (key == "states_to") {
            for (const [key, values] of value.entries()) {
                $("#selectedNodeDetails").append(`
                        <p>Jump To ><span class="jump-to-state" data-id="${values}">${values}</span></p>
                    `)
            }
        } else {
            $("#selectedNodeDetails").append(`
                    <p>${key.replace(/_/g, ' ')}:<span>${value}</span></p>
                `)
        }



    }

    $("#selectedNode").fadeIn(50);

    node.setOptions({
        font: {
            background: "#1E88E5",
            color: "#fff",
        },
    });

    $(".jump-to-state").off("click");
    $(".jump-to-state").on("click", function () {
        OnPageLoadTriggerBaseNode($(this).text());
    })

    $(".view-screen").on("click", function () {

        var ImageID = $(this).data('id');

        $.ajax({
            url: window.location.href + 'img/screens/' + $(this).data('id') + ".jpg",
            processData: false,
            success: function () {
                $("#IMAGE_ID").attr("src", window.location.href + 'img/screens/' + ImageID + ".jpg");
            },
            error: function (r, x) {
                $("#IMAGE_ID").attr("src", window.location.href + "img/screens/no-image.png");
            }
        });


        $('#EnlargeImageView').modal('show');
    })

}

$(document).ready(function () {

    graph.on("selectNode", function (params) {
        var selectedNodeId = params.nodes[0];
        var node = graph.body.nodes[selectedNodeId];

        $("#selectedNodeDetails").html("");

        for (const [key, value] of states.states[selectedNodeId].entries()) {

            if (key == "screen_number") {
                $("#selectedNodeDetails").append(`
                    <p>View Screen ><span>${value}</span> <span data-id="${value}" title="View Full Screen Image" class="material-symbols-outlined view-screen"> search </span></p>
                `)
            }

            if (key == "states_to") {
                for (const [key, values] of value.entries()) {
                    $("#selectedNodeDetails").append(`
                        <p>Jump To ><span class="jump-to-state" data-id="${values}">${values}</span></p>
                    `)
                }
            } else {
                $("#selectedNodeDetails").append(`
                    <p>${key.replace(/_/g, ' ')}:<span>${value}</span></p>
                `)
            } 

        }

        $("#selectedNode").fadeIn(50);

        node.setOptions({
            font: {
                background: "#1E88E5",
                color: "#fff",
            },
        });

        $(".jump-to-state").off("click");
        $(".jump-to-state").on("click", function () {
            OnPageLoadTriggerBaseNode($(this).text());
        })

        $(".view-screen").on("click", function () {

            var ImageID = $(this).data('id');

            $.ajax({
                url: window.location.href + 'img/screens/' + $(this).data('id') + ".jpg",
                processData: false,
                success: function () {
                    $("#IMAGE_ID").attr("src", window.location.href + 'img/screens/' + ImageID + ".jpg");
                },
                error: function (error) {
                    $("#IMAGE_ID").attr("src", window.location.href + "img/screens/no-image.png");
                }
            });


            $('#EnlargeImageView').modal('show');
        })

    });

    graph.on("deselectNode", function (params) {
        var deselectedNodeId = params.previousSelection.nodes[0];
        var node = graph.body.nodes[deselectedNodeId];

        deselectedNodeId.setOptions({
            font: {
                background: nodes.background,
                color: nodes.color
            }
        });

        $(".jump-to-state").off("click");
        $(".jump-to-state").on("click", function () {
            OnPageLoadTriggerBaseNode($(this).text());
        })

    });

    graph.on("oncontext", function (params) {

        params.event.preventDefault();
        $(".custom-menu").finish().toggle();
        $(".custom-menu").css({
            top: params.event.pageY + "px",
            left: params.event.pageX + "px"
        });
    });

    $("#node-add").on("click", function () {
        addNode();
    })

    $(".close-node-details").on("click", function () {
        $("#selectedNode").fadeOut(50);
    })

    $(".add-new-state-wrapper").on("click", function () {
        $('#AddNewStateModal').modal('show');
    })

    $("#exportBtn").on("click", function () {

        $("#exportBtn .material-symbols-outlined").addClass('active');

        for (var key in states.states) {
            RawExportedKeys.push(key);
        }

        for (var x = 0; x < RawExportedKeys.sort().length; x++) {
            RawExportedData.push(states.states[RawExportedKeys.sort()[x]]);
        }

        $(".exported-file-data-wrapper").html("");

        for (var z = 0; z < RawExportedData.length; z++) {
            for (let value of RawExportedData[z]) {
                if (value[0] == "level") {
                    $(".exported-file-data-wrapper").append("FS<div class='spacer'></div>");
                } else if (value[0] == "states_to" || value[0] == "description") {

                } else {
                    $(".exported-file-data-wrapper").append(`<span>${value[1]} </span>`);
                }
            }
        }

        setTimeout(function () {
            $("#exportBtn .material-symbols-outlined").removeClass('active');
            $('#ExportedFileDataPreview').modal('show');
        }, 1000)

    })    

    setTimeout(function () {
        $('.splash-wrapper').fadeOut(350);
        OnPageLoadTriggerBaseNode("000");

        setTimeout(function () {
            states.delete("000");
        }, 2000)
    }, 2000)

})


//console.log(states.addState("136W100100155100100100100100"));

//states.parseState('000A870500128002002002001127');

// console.log(states.add(states.states));
// console.log(states.states);

//console.log(states.states);
// console.log(states.getNodes());
// console.log(states.getEdges());
// console.log(states.prepareStatesToSave());
//console.log(states.levels);