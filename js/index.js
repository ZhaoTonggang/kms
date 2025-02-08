"use strict";
const sysList = {
	'Windows': {
		'Vista': {
			'商用版': 'YFKBB-PQJJV-G996G-VWGXY-2V3X8',
			'商用版 N': 'HMBQG-8H2RH-C77VX-27R82-VMQBT',
			'企业版': 'VKK3X-68KWM-X2YGT-QR4M6-4BWMV',
			'企业版 N': 'VTC42-BM838-43QHV-84HX6-XJXKV',
			'商用版 [Preview 1]': 'XQYF4-QVCMY-YXQRD-9QPV8-3YP9V',
			'商用版 [Preview 2]': 'YVT36-YVCP2-J97GQ-7T22R-RWV8P',
			'商用版 N [Preview]': 'HGBJ9-RWD6M-6HDGW-6T2XD-JQ66F',
			'企业版 [Preview 1]': '3JHG3-Y66GP-B7F3K-JFVX2-VBH7K',
			'企业版 [Beta-2 build 5384]': 'MF9PG-RQK7R-26BPJ-TWFYK-RHXCM'
		},
		'7': {
			'企业版 E': 'C29WB-22CC8-VJ326-GHFJW-H9DH4',
			'企业版': '33PXH-7Y6KF-2VJC9-XBBR8-HVTHH',
			'企业版 N': 'YDRBP-3D83W-TY26F-D46B2-XCKRJ',
			'专业版': 'FJ82H-XT6CR-J8D7P-XQJJ2-GPDD4',
			'专业版 E': 'W82YF-2Q76Y-63HXB-FGJG9-GF7QX',
			'专业版 N': 'MRPKT-YTG23-K7D7T-X2JMM-QY7MG',
			'嵌入式 POSReady': 'YBYF6-BHCR3-JPKRB-CDW7B-F9BK4',
			'嵌入式 Standard': 'XGY72-BRBBT-FF8MH-2GG8H-W7KCW',
			'精简版': '73KQT-CD9G6-K7TQG-66MRP-CQ22C'
		},
		'8': {
			'核心版 / Server 2012': 'BN3D2-R7TKB-3YPBD-8DRP2-27GG4',
			'核心版 / Server 2012 Country Specific': '4K36P-JN4VD-GDC6V-KDT89-DYFKP',
			'核心版 / Server 2012 N': '8N2M2-HWPGY-7PGT9-HGDD8-GVGGY',
			'核心版 / Server 2012 Single Language': '2WN2H-YGCQR-KFX6K-CD6TF-84YXQ',
			'专业版 WMC': 'GNBB8-YVD74-QJHX6-27H4K-8QHDG',
			'嵌入式 工业 专业版': 'RYXVT-BNQG7-VD29F-DBMRY-HT73M',
			'嵌入式 工业 企业版': 'NKB3R-R2F8T-3XCDP-7Q2KW-XWYQ2',
			'企业版': '32JNW-9KQ84-P47T8-D8GGY-CWCK7',
			'企业版 N': 'JMNMF-RHW7P-DMY6X-RF3DR-X2BQT',
			'专业版': 'NG4HW-VH26C-733KW-K6F98-J8CK4',
			'专业版 N': 'XCVCF-2NXM9-723PB-MHCB7-2RYQQ',
			'专业版 WMC [RC]': 'MY4N9-TGH34-4X4VY-8FG2T-RRDPV'
		},
		'8.1': {
			'核心版': 'M9Q9P-WNJJT-6PXPY-DWX8H-6XWKK',
			'核心版 ARM64': 'XYTND-K6QKT-K2MRH-66RTM-43JKP',
			'核心版 Country Specific': 'NCTT7-2RGK8-WMHRF-RY7YQ-JTXG3',
			'核心版 N': '7B9N3-D94CG-YTVHR-QBPX3-RJP64',
			'核心版 Single Language': 'BB6NG-PQ82V-VRDPW-8XVD2-V8P66',
			'专业学生版': 'MX3RK-9HNGX-K3QKC-6PJ3F-W8D7B',
			'专业学生版 N': 'TNFGH-2R6PB-8XM3K-QYHX2-J4296',
			'专业版 WMC': '789NJ-TQK6T-6XTH8-J39CJ-J8D3P',
			'核心版 Connected': '3PY8R-QHNP9-W7XQD-G6DPH-3J2C9',
			'核心版 Connected Country Specific': 'R962J-37N87-9VVK2-WJ74P-XTMHR',
			'核心版 Connected N': 'Q6HTR-N24GM-PMJFP-69CD8-2GXKR',
			'核心版 Connected Single Language': 'KF37N-VDV38-GRRTV-XH8X6-6F3BB',
			'企业版': 'MHF9N-XY6XB-WVXMC-BTDCT-MKKG7',
			'企业版 N': 'TT4HM-HN7YT-62K67-RGRQJ-JFFXW',
			'专业版': 'GCRJD-8NW9H-F2CDX-CCM8D-9D6T9',
			'专业版 N': 'HMCNV-VVBFX-7HMBH-CTY9B-B4FXY',
			'嵌入式 工业 专业版': 'NMMPB-38DD4-R2823-62W8D-VXKJB',
			'嵌入式 工业 Automotive': 'VHXM3-NR6FT-RY6RT-CK882-KW2CJ',
			'嵌入式 工业 企业版': 'FNFKF-PWTVT-9RC8H-32HB2-JB34X',
			'企业版 [Preview]': '2MP7K-98NK8-WPVF3-Q2WDG-VMD98',
			'专业版 (Blue) [Preview]': 'MTWNQ-CKDHJ-3HXW9-Q2PFX-WB2HQ'
		},
		'8.x': {
			'[Preview]': 'MPWP3-DXNP9-BRD79-W8WFP-3YFJ6'
		},
		'10 / 11': {
			'企业版 LTSC 2019': 'M7XTQ-FN8P6-TTKYV-9D4CC-J462D',
			'企业版 LTSC 2019 N': '92NFX-8DJQP-P6BBQ-THF9C-7CG2H',
			'企业版 G': 'YYVX9-NTFWV-6MDM3-9PT4T-4M68B',
			'企业版 G N': '44RPN-FTY23-9VTTB-MP9BX-T84FV',
			'企业版 2016 LTSB': 'DCPHK-NFMTC-H88MJ-PFHPY-QJ4BJ',
			'企业版 2016 LTSB N': 'QFFDN-GRT3P-VKWWX-X7T3R-8B639',
			'家庭版 / 核心版': 'TX9XD-98N7V-6WMQ6-BX7FG-H8Q99',
			'家庭版 / 核心版 Country Specific': 'PVMJN-6DFY6-9CCP6-7BKTT-D3WVR',
			'家庭版 / 核心版 N': '3KHY7-WNT83-DGQKR-F7HPR-844BM',
			'家庭版 / 核心版 Single Language': '7HNRX-D7KGG-3K4RQ-4WPJ4-YTDFH',
			'教育版': 'NW6C2-QMPVW-D7KKK-3GKT6-VCFB2',
			'教育版 N': '2WH4N-8QGBV-H22JP-CT43Q-MDWWJ',
			'企业版': 'NPPR9-FWDCX-D2C8J-H872K-2YT43',
			'企业版 [Preview]': 'QNMXX-GCD3W-TCCT4-872RV-G6P4J',
			'企业版 S': 'H76BG-QBNM7-73XY9-V6W2T-684BJ',
			'企业版 2015 LTSB': 'WNMTR-4C88C-JK8YV-HQ7T2-76DF9',
			'企业版 2015 LTSB N': '2F77B-TNFGY-69QQF-B8YKP-D69TJ',
			'企业版 N': 'DPH2V-TTNVB-4X9Q3-TJR4H-KHJW4',
			'企业版 S N': 'X4R4B-NV6WD-PKTVK-F98BH-4C2J8',
			'专业工作站版': 'NRG8B-VKK3Q-CXVCJ-9G2XF-6Q84J',
			'专业工作站版 N': '9FNHH-K3HBT-3W4TD-6383H-6XYWF',
			'专业版': 'W269N-WFGWX-YVC9B-4J6C9-T83GX',
			'专业教育版': '6TP4R-GNPTD-KYYHQ-7B7DP-J447Y',
			'专业教育版 N': 'YVWGF-BXNMC-HTQYQ-CPQ99-66QFC',
			'专业版 N': 'MH37W-N47XK-V7XM9-C7227-GCQG9',
			'专业版 [Preview]': 'XQHPH-N4D9W-M8P96-DPDFP-TMVPY',
			'专业版 WMC [Pre-Release]': 'NKPM6-TCVPT-3HRFX-Q4H9B-QJ34Y',
			'企业版 for Virtual Desktops': 'CPWHC-NT2C7-VYW78-DHDB2-PG3GK',
			'远程服务器版': '7NBT4-WGBQX-MP4H7-QXFF8-YP3KX',
			'S (Lean)': 'NBTWJ-3DR69-3C4V8-C26MC-GQ9M6',
			'IoT 核心版 [Pre-Release]': '7NX88-X6YM3-9Q3YT-CCGBF-KBVQF',
			'核心版 Connected [Pre-Release]': 'DJMYQ-WN6HG-YJ2YX-82JDB-CWFCW',
			'核心版 Connected N [Pre-Release]': 'JQNT7-W63G4-WX4QX-RD9M9-6CPKM',
			'核心版 Connected Single Language [Pre-Release]': 'QQMNF-GPVQ6-BFXGG-GWRCX-7XKT7',
			'核心版 Connected Country Specific [Pre-Release]': 'FTNXM-J4RGP-MYQCV-RVM8R-TVH24',
			'专业版 S [Pre-Release]': '3NF4D-GF9GY-63VKH-QRC3V-7QW8P',
			'专业版 S N [Pre-Release]': 'KNDJ3-GVHWT-3TV4V-36K8Y-PR4PF',
			'专业学生版 [Pre-Release]': 'YNXW3-HV3VB-Y83VG-KPBXM-6VH3Q',
			'专业学生版 N [Pre-Release]': '8G9XJ-GN6PJ-GW787-MVV7G-GMR99'
		},
		'Server': {
			'Next HI [Preview]': '7VX4N-3VDHQ-VYGHB-JXJVP-9QB26'
		},
		'Server 2008': {
			'Web': 'WYR28-R7TFJ-3X2YQ-YCY4H-M249D',
			'HPC Edition': 'RCTX3-KWVHP-BR6TB-RB6DM-6X7HP',
			'Standard': 'TM24T-X9RMF-VWXK6-X8JC9-BFGM2',
			'Standard without Hyper-V': 'W7VD6-7JFBR-RX26B-YKQ3Y-6FFFJ',
			'企业版': 'YQGMW-MPWTJ-34KDK-48M3W-X4Q6V',
			'企业版 without Hyper-V': '39BXF-X8Q23-P2WWT-38T2F-G3FPG',
			'Datacenter': '7M67G-PC374-GR742-YH8V4-TCBY3',
			'Datacenter without Hyper-V': '22XQ2-VRXRG-P8D42-K34TD-G3QQC',
			'for Itanium Systems': '4DWFP-JF3DJ-B7DTH-78FJB-PDRHK',
			'R2 Web': '6TPJF-RBVHG-WBW2R-86QPH-6RTM4',
			'R2 HPC Edition': 'TT8MH-CG224-D3D7Q-498W2-9QCTX',
			'R2 Standard': 'YC6KT-GKW9T-YTKYR-T4X34-R7VHC',
			'R2 企业版': '489J6-VHDMP-X63PK-3K798-CPX3Y',
			'R2 Datacenter': '74YFP-3QFB3-KQT8W-PMXWJ-7M648',
			'R2 for Itanium Systems': 'GT63C-RJFQ3-4GMB6-BRFB9-CB83V'
		},
		'Server 2012': {
			'Datacenter': '48HP8-DN98B-MYWDG-T2DCC-8W83P',
			'MultiPoint Premium': 'XNH6W-2V9GX-RGJ4K-Y8X6F-QGJ2G',
			'MultiPoint Standard': 'HM7DN-YVMH3-46JC3-XYTG7-CYQJJ',
			'Standard': 'XC9B7-NBPP2-83J2H-RHMBY-92BT4',
			'R2 Cloud Storage': '3NPTF-33KPT-GGBPR-YX76B-39KDD',
			'R2 Datacenter': 'W3GGN-FT8W3-Y4M27-J84CP-Q3VJ9',
			'R2 Essentials': 'KNC87-3J2TX-XB4WP-VCPJV-M4FWM',
			'R2 Standard': 'D2N9P-3P6X9-2R39C-7RTCD-MDVJX'
		},
		'Server 2016': {
			'Azure 核心版': 'VP34G-4NPPG-79JTQ-864T4-R3MQX',
			'Cloud Storage': 'QN4C6-GBJD2-FB422-GHWJK-GJG2R',
			'Datacenter': 'CB7KF-BWN84-R7R2Y-793K2-8XDDG',
			'Essentials': 'JCKRF-N37P4-C2D82-9YXRT-4M63B',
			'Standard': 'WC2BQ-8NRM3-FDDYY-2BFGV-KHKQY',
			'ARM64': 'K9FYF-G6NCK-73M32-XMVPY-F9DRR',
			'Datacenter (Semi-Annual Channel v.1803)': '2HXDN-KRXHB-GPYC7-YCKFJ-7FVDG',
			'Standard (Semi-Annual Channel v.1803)': 'PTXN8-JFHJM-4WC78-MPCBR-9W4KR',
			'Datacenter [Preview]': 'VRDD2-NVGDP-K7QG8-69BR4-TVFHB'
		},
		'Server 2019': {
			'ARM64': 'GRFBW-QNDC4-6QBHG-CCK3B-2PR88',
			'Azure 核心版': 'FDNH6-VW9RW-BXPJ7-4XTYG-239TB',
			'Datacenter': 'WMDGN-G9PQG-XVVXX-R3X43-63DFG',
			'Essentials': 'WVDHN-86M7X-466P6-VHXV7-YY726',
			'Standard': 'N69G4-B89J2-4G8F4-WWYCC-J464C',
			'Datacenter (Semi-Annual Channel v.1809)': '6NMRW-2C8FM-D24W7-TQWMY-CWH2D',
			'Standard (Semi-Annual Channel v.1809)': 'N2KJX-J94YW-TQVFB-DG9YT-724CC',
			'Standard [Preview]': 'MFY9F-XBN2F-TYFMP-CCV49-RMYVH',
			'Datacenter [Preview]': '6XBNX-4JQGW-QX6QG-74P76-72V67'
		},
		'Server 2022': {
			'Standard': 'VDYBN-27WPP-V4HQT-9VMD4-VMK7H',
			'Datacenter': 'WX4NM-KYWYW-QJJR4-XV3QB-6VM33',
			'Datacenter：Azure Edition': 'NTBV8-9K7Q8-V27C6-M2BTV-KHMXV'
		},
		'Server 2025': {
			'标准': 'TVRH6-WHNXV-R9WG3-9XRFY-MY832',
			'数据中心': 'D764K-2NDRG-47T6Q-P8T8W-YP6DF',
			'Datacenter：Azure Edition': 'XGN3F-F394H-FD2MY-PP6FD-8MCRC'
		},
		'Longhorn': {
			'Web [Preview]': 'MDRCM-4WKCW-J93FF-J9Q48-M6KBB',
			'Standard': 'Q37JX-P3HHB-GKRH2-PDBKG-GGXPW',
			'企业版': '7KYMQ-R788Q-4RF69-KTWKM-92PFJ',
			'Datacenter [Preview]': 'HR8VD-7DHG2-48378-M9D73-28F4T',
			'for Itanium Systems [Preview]': 'CWV9H-PHGPW-V93WV-QBQV9-8V336'
		},
		'MultiPoint': {
			'Server 2010': '736RG-XDKJK-V34PF-BHK87-J6X3K'
		}
	},
	'Office': {
		'2010': {
			'Office Professional Plus': 'VYBBJ-TRJPB-QFQRF-QFT4D-H3GVB',
			'Office Standard': 'V7QKV-4XVVR-XYV4D-F7DFM-8R6BM',
			'Office Home and Business': 'D6QFG-VBYP2-XQHM7-J97RH-VVRCK',
			'Access': 'V7Y44-9T38C-R2VJK-666HK-T7DDX',
			'Excel': 'H62QG-HXVKF-PP4HP-66KMR-CW9BM',
			'SharePoint Workspace': 'QYYW6-QP4CB-MBV6G-HYMCJ-4T3J4',
			'InfoPath': 'K96W8-67RPQ-62T9Y-J8FQJ-BT37T',
			'OneNote': 'Q4Y4M-RHWJM-PY37F-MTKWH-D3XHX',
			'Outlook': '7YDC2-CWM8M-RRTJC-8MDVC-X3DWQ',
			'PowerPoint': 'RC8FX-88JRY-3PF7C-X8P67-P4VTT',
			'Project Professional': 'YGX6F-PGV49-PGW3J-9BTGG-VHKC6',
			'Project Standard': '4HP3K-88W3F-W2K3D-6677X-F9PGB',
			'Publisher': 'BFK7F-9MYHM-V68C7-DRQ66-83YTP',
			'Word': 'HVHB3-C6FV7-KQX9W-YQG79-CRY7T',
			'Visio Premium': 'D9DWC-HPYVV-JGF4P-BTWQB-WX8BJ',
			'Visio Professional': '7MCW8-VRQVK-G677T-PDJCM-Q8TCP',
			'Visio Standard': '767HD-QGMWX-8QTDB-9G3R2-KHFGJ'
		},
		'2013': {
			'Office Professional Plus': 'YC7DK-G2NP3-2QQC3-J6H88-GVGXT',
			'Office Standard': 'KBKQT-2NMXY-JJWGP-M62JB-92CD4',
			'Project Professional': 'FN8TT-7WMH6-2D4X9-M337T-2342K',
			'Project Standard': '6NTH3-CW976-3G3Y2-JK3TX-8QHTT',
			'Visio Professional': 'C2FG9-N6J68-H8BTJ-BW3QX-RM3B3',
			'Visio Standard': 'J484Y-4NKBF-W2HMG-DBMJC-PGWR7',
			'Access': 'NG2JY-H4JBT-HQXYP-78QH9-4JM2D',
			'Excel': 'VGPNG-Y7HQW-9RHP7-TKPV3-BG7GB',
			'InfoPath': 'DKT8B-N7VXH-D963P-Q4PHY-F8894',
			'Lync': '2MG3G-3BNTT-3MFW9-KDQW3-TCK7R',
			'OneNote': 'TGN6P-8MMBC-37P2F-XHXXK-P34VW',
			'Outlook': 'QPN8Q-BJBTJ-334K3-93TGY-2PMBT',
			'PowerPoint': '4NT99-8RJFH-Q2VDH-KYG2C-4RD4F',
			'Publisher': 'PN2WF-29XG2-T9HJ7-JQPJR-FCXK4',
			'Word': '6Q7VD-NX8JD-WJ2VH-88V73-4GBJ7'
		},
		'2016': {
			'Office Professional Plus': 'XQNVK-8JYDB-WJ9W3-YJ8YR-WFG99',
			'Office Standard': 'JNRGM-WHDWX-FJJG3-K47QV-DRTFM',
			'Project Professional': 'YG9NW-3K39V-2T3HJ-93F3Q-G83KT',
			'Project Standard': 'GNFHQ-F6YQM-KQDGJ-327XX-KQBVC',
			'Visio Professional': 'PD3PC-RHNGV-FXJ29-8JK7D-RJRJK',
			'Visio Standard': '7WHWN-4T7MP-G96JF-G33KR-W8GF4',
			'Access': 'GNH9Y-D2J4T-FJHGG-QRVH7-QPFDW',
			'Excel': '9C2PK-NWTVB-JMPW8-BFT28-7FTBF',
			'OneNote': 'DR92N-9HTF2-97XKM-XW2WJ-XW3J6',
			'Outlook': 'R69KK-NTPKF-7M3Q4-QYBHW-6MT9B',
			'PowerPoint': 'J7MQP-HNJ4Y-WJ7YM-PFYGF-BY6C6',
			'Publisher': 'F47MM-N3XJP-TQXJ9-BP99D-8837K',
			'Skype for Business': '869NQ-FJ69K-466HW-QYCP2-DDBV6',
			'Word': 'WXY84-JN2Q9-RBCCQ-3Q3J3-3PFJ6'
		},
		'2019': {
			'Office 专业增强版': 'NMMKJ-6RK4F-KMJVX-8D9MJ-6MWKP',
			'Office Standard': '6NWWJ-YQWMR-QKGCB-6TMB3-9D9HK',
			'Project Professional': 'B4NPR-3FKK7-T2MBV-FRQ4W-PKD2B',
			'Project Standard': 'C4F7P-NCP8C-6CQPT-MQHV9-JXD2M',
			'Visio Professional': '9BGNQ-K37YR-RQHF2-38RQ3-7VCBB',
			'Visio Standard': '7TQNQ-K3YQQ-3PFH7-CCPPM-X4VQ2',
			'Access': '9N9PT-27V4Y-VJ2PD-YXFMF-YTFQT',
			'Excel': 'TMJWT-YYNMB-3BKTF-644FC-RVXBD',
			'Outlook': '7HD7K-N4PVK-BHBCQ-YWQRW-XW4VK',
			'PowerPoint': 'RRNCX-C64HY-W2MM7-MCH9G-TJHMQ',
			'Publisher': 'G2KWX-3NW6P-PY93R-JXK2T-C9Y9V',
			'Skype for Business': 'NCJ33-JHBBY-HTK98-MYCV8-HMKHJ',
			'Word': 'PBX3G-NWMT6-Q7XBW-PYJGG-WXD33'
		},
		'LTSC 2021': {
			'Office LTSC Professional Plus': 'FXYTK-NJJ8C-GB6DW-3DYQT-6F7TH',
			'Office LTSC Standard': 'KDX7X-BNVR8-TXXGX-4Q7Y8-78VT3',
			'Project Professional': 'FTNWT-C6WBT-8HMGF-K9PRX-QV9H8',
			'Project Standard': 'J2JDC-NJCYY-9RGQ4-YXWMH-T3D4T',
			'Visio LTSC Professional': 'KNH8D-FGHT4-T8RK3-CTDYJ-K2HT4',
			'Visio LTSC Standard': 'MJVNY-BYWPY-CWV6J-2RKRT-4M8QG',
			'Access LTSC': 'WM8YG-YNGDD-4JHDC-PG3F4-FC4T4',
			'Excel LTSC': 'NWG3X-87C9K-TC7YY-BC2G7-G6RVC',
			'Outlook LTSC': 'C9FM6-3N72F-HFJXB-TM3V9-T86R9',
			'PowerPoint LTSC': 'TY7XF-NFRBR-KJ44C-G83KF-GX27K',
			'Publisher LTSC': '2MW9D-N4BXM-9VBPG-Q7W6M-KFBGQ',
			'Skype for Business LTSC': 'HWCXN-K3WBT-WJBKY-R8BD9-XK29P',
			'Word LTSC': 'TN8H9-M34D3-Y64V9-TR72V-X79KV'
		},
		'LTSC 2024': {
			'Office LTSC 专业增强版': 'XJ2XN-FW8RK-P4HMP-DKDBV-GCVGB',
			'Office LTSC 标准版': 'V28N4-JG22K-W66P8-VTMGK-H6HGR',
			'Project Professional ': 'FQQ23-N4YCY-73HQ3-FM9WC-76HF4',
			'Project Standard': 'PD3TT-NTHQQ-VC7CY-MFXK3-G87F8',
			'Visio LTSC Professional': 'B7TN8-FJ8V3-7QYCP-HQPMV-YY89G',
			'Visio LTSC Standard': 'JMMVY-XFNQC-KK4HK-9H7R3-WQQTV',
			'Access LTSC': '82FTR-NCHR7-W3944-MGRHM-JMCWD',
			'Excel LTSC': 'F4DYN-89BP2-WQTWJ-GR8YC-CKGJG',
			'Outlook LTSC': 'D2F8D-N3Q3B-J28PV-X27HD-RJWB9',
			'PowerPoint LTSC': 'CW94N-K6GJH-9CTXY-MG2VC-FYCWP',
			'Skype for Business LTSC': '4NKHF-9HBQF-Q3B6C-7YV34-F64P3',
			'Word LTSC': 'MQ84N-7VYDM-FXV7C-6K7CC-VFW9J'
		}
	}
};
const kms = 'kms-serve.heheda.top';
let vtype, vbit, vname;
const gbit = document.getElementById('bit');
const gname = document.getElementById('name');
const gversion = document.getElementById('version');
const gkey = document.getElementById('key');
const link = document.getElementById('btn');
const dbit = document.getElementById('dbit').style;
const dname = document.getElementById('dname').style;
const dversion = document.getElementById('dversion').style;
const dkey = document.getElementById('dkey').style;
const ctype = () => {
	vtype = document.getElementById('type').value;
	if (vtype == 'Windows') {
		dbit.display = 'none';
		dname.display = 'table';
		let name = '';
		for (let j in sysList[vtype]) {
			name += '<option value="' + j + '">' + vtype + '&nbsp' + j + '</option>';
		}
		gname.innerHTML = '<option value="" selected>--请选择--</option>' + name;
	} else if (vtype == 'Office') {
		dname.display = 'none';
		dbit.display = 'table';
	} else {
		dbit.display = 'none';
		dname.display = 'none';
		dversion.display = 'none';
		link.style.display = 'none';
		dkey.display = 'none';
		gname.value = '';
		gversion.value = '';
		gkey.value = '';
	}
}
const cbit = () => {
	vbit = gbit.value;
	if (vbit) {
		dname.display = 'table';
		let name = '';
		for (let j in sysList[vtype]) {
			name += '<option value="' + j + '">' + vtype + '&nbsp' + j + '</option>';
		}
		gname.innerHTML = '<option value="" selected>--请选择--</option>' + name;
	} else {
		dname.display = 'none';
		dversion.display = 'none';
		link.style.display = 'none';
		dkey.display = 'none';
		dname.value = '';
		gversion.value = '';
		gkey.value = '';
	}
}
const cname = () => {
	vname = gname.value;
	if (vname) {
		dversion.display = 'table';
		let version = '';
		for (let k in sysList[vtype][vname]) {
			version += '<option value="' + sysList[vtype][vname][k] + '">' + k + '</option>';
		}
		gversion.innerHTML = '<option value="" selected>--请选择--</option>' + version;
	} else {
		dversion.display = 'none';
		link.style.display = 'none';
		dkey.display = 'none';
		gkey.value = '';
		gversion.value = '';
	}
}
const cversion = () => {
	let kmskey = gversion.value;
	if (kmskey && vtype == 'Windows') {
		link.href = 'data:text/plain;base64,' + btoa('slmgr /ipk ' + kmskey + '\nslmgr /skms ' + kms +
			'\nslmgr /ato\nslmgr /xpr');
		link.download = 'kms-windows.bat';
		link.style.display = 'block';
		gkey.value = kmskey;
		dkey.display = 'table';
	} else if (kmskey && vtype == 'Office') {
		let bit = gbit.value;
		if (bit == '32') {
			bit = ' (x86)';
		} else if (bit == '64') {
			bit = '';
		} else {
			alert('应用位数为空，请选择应用位数！');
			return;
		}
		link.href = 'data:text/plain;base64,' + btoa(
			'cd "C:\\Program Files' + bit + '\\Microsoft Office\\Office*"\ncscript ospp.vbs /inpkey:' + kmskey +
			'\ncscript ospp.vbs /sethst:' + kms + '\ncscript ospp.vbs /act');
		link.download = 'kms-office-' + gbit.value + '.bat';
		link.style.display = 'block';
		gkey.value = kmskey;
		dkey.display = 'table';
	} else {
		link.style.display = 'none';
		gkey.value = '';
		dkey.display = 'none';
	}
}
const copy = () => {
	if (gkey.value) {
		navigator.clipboard.writeText(gkey.value);
		alert('复制成功！');
	} else {
		alert('复制失败，未获取到密钥！');
	}
}
const chose = () => {
	gkey.select();
	gkey.setSelectionRange(0, 99999);
}