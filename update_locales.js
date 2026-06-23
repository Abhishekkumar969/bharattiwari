const fs = require('fs');

const demandsHi = `  demands: {
    title: "हमारी 11 प्रमुख माँगें – एक बेहतर बिहार के लिए",
    expand: "मुख्य माँगें (विस्तार से)",
    d1: {
      title: "शहीद भरत भूषण तिवारी के हत्यारों को फाँसी की सजा दो।",
      desc: "<ul> <li> मामले की सुनवाई फास्ट ट्रैक कोर्ट में कराई जाए ताकि पीड़ित परिवार को समय पर न्याय मिल सके </li> <li> फर्जी एनकाउंटर में शामिल प्रत्येक दोषी की पहचान की जाए। उनकी व्यक्तिगत एवं प्रशासनिक जिम्मेदारी तय की जाए। </li> <li> शहीद भरत तिवारी को आधिकारिक रूप से शहीद का दर्जा प्रदान किया जाए, ताकि आने वाली पीढ़ियाँ उनके साहस, बलिदान और न्याय के प्रति समर्पण से प्रेरणा प्राप्त कर सकें। </li> <li> न्याय में देरी, न्याय से वंचित करने के समान है। </li> </ul>  "
    },
    d2: {
      title: "पुलिस सुधार एवं मानवाधिकारों का सम्मान",
      desc: "<ul> <li> सभी पुलिस अधिकारियों और कर्मियों के लिए Empathy Training (संवेदनशीलता प्रशिक्षण) अनिवार्य किया जाए, ताकि वे नागरिकों के साथ सम्मानजनक और मानवीय व्यवहार कर सकें।</li> <li>Police Morale, Ethics और Constitutional Values पर नियमित प्रशिक्षण अनिवार्य हो, जिससे सेवा, कर्तव्य और जनविश्वास की भावना मजबूत हो। </li> <li>पुलिस का धर्म सेवा है, भय नहीं; विश्वास है, अत्याचार नहीं। </li> </ul> "
    },
    d3: {
      title: "सूचना का अधिकार, पारदर्शिता और जनता के हर पैसे का हिसाब",
      desc: "<ul> <li> जनता के हर एक पैसे का जवाब दो। </li> <li> गाँव, पंचायत और प्रखंड स्तर तक खर्च की जानकारी सार्वजनिक हो। </li> <li>एक आम नागरिक भी आसानी से समझ सके कि उसके क्षेत्र के लिए कितना पैसा आया और कहाँ खर्च हुआ। </li> <li>प्रत्येक पंचायत और प्रखंड के लिए सार्वजनिक 'जनता डैशबोर्ड' बनाया जाए। </li> <li>सभी विकास कार्यों, टेंडर, भुगतान और प्रगति की जानकारी सरल भाषा में उपलब्ध हो।</li> <li>इतनी स्पष्ट, सरल और समय पर जानकारी उपलब्ध कराई जाए कि नागरिकों को RTI दाखिल करने की आवश्यकता ही न पड़े।  </li> <li>सरकारी कार्यालयों, पंचायत भवनों और वेबसाइटों पर सभी योजनाओं का विवरण नियमित रूप से प्रदर्शित किया जाए। </li> <li>सामाजिक अंकेक्षण (Social Audit) अनिवार्य किया जाए।</li> <li> भ्रष्टाचार और धन के दुरुपयोग पर त्वरित कार्रवाई हो। </li> <li>इतनी पारदर्शिता हो कि RTI की आवश्यकता ही न पड़े। </li> </ul> "
    },
    d4: {
      title: "हर पंचायत / प्रखंड में गुणवत्तापूर्ण सरकारी स्कूल",
      desc: "<ul> <li>हर पंचायत में आधुनिक सरकारी विद्यालय।</li> <li> योग्य शिक्षकों की नियमित नियुक्ति। </li> <li>डिजिटल शिक्षा और पुस्तकालय की सुविधा। </li>  <li>गरीब बच्चों के लिए समान शिक्षा का अधिकार।</li> <li>खेल, विज्ञान और तकनीकी शिक्षा को बढ़ावा। </li></ul> "
    },
    d5: {
      title: "प्रत्येक प्रखंड में आधुनिक सरकारी अस्पताल",
      desc: "<ul> <li>विशेषज्ञ डॉक्टरों की उपलब्धता।</li> <li>24×7 इमरजेंसी सेवा। </li> <li>सस्ती एवं निःशुल्क दवाइयाँ। </li>  <li>मातृ एवं शिशु स्वास्थ्य सुविधाएँ।</li> <li>आधुनिक जांच उपकरण और एम्बुलेंस सेवा। </li> </ul> "
    },
    d6: {
      title: "हर गाँव तक सड़क, बिजली, पानी",
      desc: "<ul> <li>सभी गाँवों को पक्की सड़क से जोड़ना।</li> <li> स्वच्छ पेयजल की उपलब्धता। </li> <li>निर्बाध बिजली आपूर्ति।  </li>  <li>इंटरनेट और डिजिटल सेवाओं का विस्तार।</li> <li>बुनियादी ढाँचे का समान विकास। </li> </ul> "
    },
    d7: {
      title: "भ्रष्टाचार मुक्त और जवाबदेह शासन",
      desc: "<ul> <li>भ्रष्टाचार के मामलों में त्वरित कार्रवाई।</li> <li>अधिकारियों की जवाबदेही तय हो। </li> <li>सरकारी कार्यों की समय सीमा तय हो। </li> <li>रिश्वतखोरी पर कठोर दंड। </li> <li>पारदर्शी प्रशासनिक व्यवस्था। </li> </ul> "
    },
    d8: {
      title: "युवाओं के लिए रोजगार और कौशल विकास",
      desc: "<ul> <li>स्थानीय स्तर पर रोजगार के अवसर।</li> <li>कौशल विकास प्रशिक्षण केंद्र। </li> <li> उद्योग और निवेश को बढ़ावा। </li>   <li>स्वरोजगार के लिए सहायता। </li> <li> युवाओं के पलायन को रोकने की नीति। </li> </ul> "
    },
    d9: {
      title: "किसानों के लिए उचित मूल्य और सहायता",
      desc: "<ul> <li>फसल का उचित समर्थन मूल्य।</li> <li>सिंचाई और बीज की सुविधा। </li> <li>समय पर सरकारी सहायता। </li>  <li>प्राकृतिक आपदा में उचित मुआवजा।</li> <li>कृषि आधारित उद्योगों को बढ़ावा। </li> </ul> "
    },
    d10: {
      title: "कमजोर वर्गों के अधिकार और सामाजिक न्याय",
      desc: "<ul> <li>दलित, पिछड़े, आदिवासी, अल्पसंख्यक और सभी कमजोर वर्गों के अधिकारों की रक्षा।</li> <li>समान अवसर सुनिश्चित हो।</li> <li>सामाजिक भेदभाव के खिलाफ सख्त कार्रवाई।</li> </ul> "
    },
    d11: {
      title: "पुनर्वास और आपदा राहत की संवैधानिक गारंटी",
      desc: "किसी का घर बिना पुनर्वास के न तोड़ा जाए और आपदा (बाढ़) में हर प्रभावित परिवार को गरिमापूर्ण जीवन की आवश्यक सुविधाएँ मिलें।"
    }
  },`;

const demandsEn = `  demands: {
    title: "Our 11 Main Demands – For a Better Bihar",
    expand: "Main Demands (in detail)",
    d1: {
      title: "Death Penalty for the Killers of Martyr Bharat Bhushan Tiwari",
      desc: "<ul> <li> Hearing of the case in a Fast Track Court so the victim's family gets timely justice. </li> <li> Identify every culprit involved in the fake encounter and fix their personal and administrative responsibility. </li> <li> Officially grant Martyr status to Bharat Tiwari so future generations can draw inspiration from his courage and sacrifice. </li> <li> Justice delayed is justice denied. </li> </ul>"
    },
    d2: {
      title: "Police Reforms and Respect for Human Rights",
      desc: "<ul> <li> Mandatory Empathy Training for all police officers to ensure humane behavior with citizens.</li> <li> Regular training on Police Morale, Ethics, and Constitutional Values to strengthen public trust. </li> <li> The duty of police is service, not fear; trust, not atrocities. </li> </ul>"
    },
    d3: {
      title: "Right to Information, Transparency, and Accountability for Every Penny",
      desc: "<ul> <li> Account for every single penny of the public. </li> <li> Make expenditure details public at the village, panchayat, and block levels. </li> <li> A common citizen should easily understand how much money came and where it was spent. </li> <li> Create a public 'Janta Dashboard' for every block and panchayat. </li> <li> Provide info on all development works, tenders, and payments in simple language.</li> <li> Transparency should be so absolute that citizens don't even need to file an RTI. </li> <li> Mandatory Social Audits.</li> <li> Swift action against corruption and misuse of funds. </li> </ul>"
    },
    d4: {
      title: "Quality Government Schools in Every Panchayat/Block",
      desc: "<ul> <li>Modern government schools in every panchayat.</li> <li> Regular appointment of qualified teachers. </li> <li> Digital education and library facilities. </li> <li> Equal right to education for poor children. </li> <li> Promotion of sports, science, and technical education. </li></ul>"
    },
    d5: {
      title: "Modern Government Hospitals in Every Block",
      desc: "<ul> <li> Availability of specialized doctors.</li> <li> 24×7 emergency services. </li> <li> Cheap and free medicines. </li> <li> Maternal and child health facilities. </li> <li> Modern testing equipment and ambulance services. </li> </ul>"
    },
    d6: {
      title: "Roads, Electricity, and Water to Every Village",
      desc: "<ul> <li> Connect all villages with paved roads.</li> <li> Availability of clean drinking water. </li> <li> Uninterrupted power supply. </li> <li> Expansion of internet and digital services. </li> <li> Equal development of infrastructure. </li> </ul>"
    },
    d7: {
      title: "Corruption-Free and Accountable Governance",
      desc: "<ul> <li> Swift action in corruption cases.</li> <li> Fix accountability of officials. </li> <li> Set time limits for government work. </li> <li> Strict punishment for bribery. </li> <li> Transparent administrative system. </li> </ul>"
    },
    d8: {
      title: "Employment and Skill Development for Youth",
      desc: "<ul> <li> Employment opportunities at the local level.</li> <li> Skill development training centers. </li> <li> Promotion of industries and investment. </li> <li> Assistance for self-employment. </li> <li> Policy to stop the migration of youth. </li> </ul>"
    },
    d9: {
      title: "Fair Prices and Support for Farmers",
      desc: "<ul> <li> Fair minimum support price for crops.</li> <li> Irrigation and seed facilities. </li> <li> Timely government assistance. </li> <li> Fair compensation in natural disasters. </li> <li> Promotion of agro-based industries. </li> </ul>"
    },
    d10: {
      title: "Rights of Weaker Sections and Social Justice",
      desc: "<ul> <li> Protection of rights of Dalits, backward classes, tribals, minorities, and all weaker sections.</li> <li> Ensure equal opportunities. </li> <li> Strict action against social discrimination. </li> </ul>"
    },
    d11: {
      title: "Constitutional Guarantee for Rehabilitation and Disaster Relief",
      desc: "No one's home should be demolished without rehabilitation, and in disasters (floods), every affected family must get essential facilities for a dignified life."
    }
  },`;

const demandsBho = `  demands: {
    title: "हमनी के 11 मुख्य माँग – एगो निमन बिहार खातिर",
    expand: "मुख्य माँग (विस्तार से)",
    d1: {
      title: "शहीद भरत भूषण तिवारी के हत्यारा लोग के फाँसी के सजा दिहल जाव।",
      desc: "<ul> <li> ई मामला के सुनवाई फास्ट ट्रैक कोर्ट में होखे ताकि पीड़ित परिवार के समय पर न्याय मिल सके। </li> <li> फर्जी एनकाउंटर में शामिल हर दोषी के पहचान होखे। उनकर व्यक्तिगत आ प्रशासनिक जिम्मेदारी तय कइल जाव। </li> <li> शहीद भरत तिवारी के आधिकारिक रूप से शहीद के दर्जा दिहल जाव, ताकि आवे वाली पीढ़ी उनकर साहस, बलिदान आ न्याय के प्रति समर्पण से प्रेरणा ले सके। </li> <li> न्याय में देरी, न्याय से वंचित कइले के समान बा। </li> </ul>"
    },
    d2: {
      title: "पुलिस सुधार आ मानवाधिकार के सम्मान",
      desc: "<ul> <li> सब पुलिस अधिकारी आ कर्मी लोग खातिर Empathy Training (संवेदनशीलता प्रशिक्षण) अनिवार्य कइल जाव, ताकि उ लोग नागरिक लोग संगे सम्मानजनक आ मानवीय व्यवहार कर सके।</li> <li> Police Morale, Ethics आ Constitutional Values पर नियमित प्रशिक्षण अनिवार्य होखे, जेसे सेवा, कर्तव्य आ जनविश्वास के भावना मजबूत होखे। </li> <li> पुलिस के धर्म सेवा ह, डर ना; विश्वास ह, अत्याचार ना। </li> </ul>"
    },
    d3: {
      title: "सूचना के अधिकार, पारदर्शिता आ जनता के हर पइसा के हिसाब",
      desc: "<ul> <li> जनता के हर एक पइसा के जवाब दीं। </li> <li> गाँव, पंचायत आ प्रखंड स्तर ले खर्च के जानकारी सार्वजनिक होखे। </li> <li> एगो आम नागरिक भी आसानी से समझ सके कि ओकर क्षेत्र खातिर कतना पइसा आइल आ कहाँ खर्च भइल। </li> <li> हर पंचायत आ प्रखंड खातिर सार्वजनिक 'जनता डैशबोर्ड' बनावल जाव। </li> <li> सभे विकास काम, टेंडर, भुगतान आ प्रगति के जानकारी आसान भाषा में उपलब्ध होखे।</li> <li> एतना स्पष्ट, आसान आ समय पर जानकारी उपलब्ध करावल जाव कि नागरिक लोग के RTI लगावे के जरूरत ही ना पड़े।  </li> <li> सरकारी कार्यालय, पंचायत भवन आ वेबसाइट पर सभे योजना के विवरण नियमित रूप से देखावल जाव। </li> <li> सामाजिक अंकेक्षण (Social Audit) अनिवार्य कइल जाव।</li> <li> भ्रष्टाचार आ धन के दुरुपयोग पर तुरंत कार्रवाई होखे। </li> <li> एतना पारदर्शिता होखे कि RTI के जरूरत ही ना पड़े। </li> </ul>"
    },
    d4: {
      title: "हर पंचायत / प्रखंड में बढ़िया सरकारी स्कूल",
      desc: "<ul> <li>हर पंचायत में आधुनिक सरकारी स्कूल।</li> <li> योग्य शिक्षक लोग के नियमित बहाली। </li> <li> डिजिटल शिक्षा आ पुस्तकालय के सुविधा। </li>  <li> गरीब लइका लोग खातिर समान शिक्षा के अधिकार।</li> <li> खेल, विज्ञान आ तकनीकी शिक्षा के बढ़ावा। </li></ul>"
    },
    d5: {
      title: "हर प्रखंड में आधुनिक सरकारी अस्पताल",
      desc: "<ul> <li> विशेषज्ञ डॉक्टर लोग के उपलब्धता।</li> <li> 24×7 इमरजेंसी सेवा। </li> <li> सस्ता आ फ्री दवाई। </li>  <li> महतारी आ बच्चा के स्वास्थ्य सुविधा।</li> <li> आधुनिक जांच मशीन आ एम्बुलेंस सेवा। </li> </ul>"
    },
    d6: {
      title: "हर गाँव ले सड़क, बिजली, पानी",
      desc: "<ul> <li> सब गाँव के पक्की सड़क से जोड़ल।</li> <li> साफ पिये वाला पानी के उपलब्धता। </li> <li> बिना कटले बिजली।  </li>  <li> इंटरनेट आ डिजिटल सेवा के विस्तार।</li> <li> बुनियादी ढाँचा के समान विकास। </li> </ul>"
    },
    d7: {
      title: "भ्रष्टाचार मुक्त आ जवाबदेह शासन",
      desc: "<ul> <li> भ्रष्टाचार के मामला में तुरंत कार्रवाई।</li> <li> अधिकारी लोग के जवाबदेही तय होखे। </li> <li> सरकारी काम के समय सीमा तय होखे। </li> <li> घूसखोरी पर कड़ा सजा। </li> <li> पारदर्शी प्रशासनिक व्यवस्था। </li> </ul>"
    },
    d8: {
      title: "युवा लोग खातिर रोजगार आ कौशल विकास",
      desc: "<ul> <li> स्थानीय स्तर पर रोजगार के अवसर।</li> <li> कौशल विकास ट्रेनिंग सेंटर। </li> <li> उद्योग आ निवेश के बढ़ावा। </li>   <li> स्वरोजगार खातिर मदद। </li> <li> युवा लोग के पलायन रोके के नीति। </li> </ul>"
    },
    d9: {
      title: "किसान लोग खातिर उचित दाम आ मदद",
      desc: "<ul> <li> फसल के उचित समर्थन मूल्य।</li> <li> सिंचाई आ बीया के सुविधा। </li> <li> समय पर सरकारी मदद। </li>  <li> प्राकृतिक आपदा में उचित मुआवजा।</li> <li> कृषि आधारित उद्योग के बढ़ावा। </li> </ul>"
    },
    d10: {
      title: "कमजोर वर्ग के अधिकार आ सामाजिक न्याय",
      desc: "<ul> <li> दलित, पिछड़ा, आदिवासी, अल्पसंख्यक आ सभे कमजोर वर्ग के अधिकार के रक्षा।</li> <li> समान अवसर सुनिश्चित होखे।</li> <li> सामाजिक भेदभाव के खिलाफ कड़ा कार्रवाई।</li> </ul>"
    },
    d11: {
      title: "पुनर्वास आ आपदा राहत के संवैधानिक गारंटी",
      desc: "केकरो घर बिना पुनर्वास के ना तोडल जाव आ आपदा (बाढ़) में हर प्रभावित परिवार के इज्जत से जिए के जरूरी सुविधा मिले।"
    }
  },`;

const replaceDemands = (filePath, newDemandsStr) => {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  const regex = /  demands: \{[\s\S]*?\n  \},/g;
  content = content.replace(regex, newDemandsStr);
  fs.writeFileSync(filePath, content);
  console.log('Updated ' + filePath);
};

replaceDemands('./src/locales/hi.ts', demandsHi);
replaceDemands('./src/locales/hin.ts', demandsHi);
replaceDemands('./src/locales/en.ts', demandsEn);
replaceDemands('./src/locales/bho.ts', demandsBho);
