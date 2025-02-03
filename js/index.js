"use strict";
const sysList = {
	'Windows Vista': {
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
	'Windows 7': {
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
	'Windows 8': {
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
		'专业版 N': 'XCVCF-2NXM9-723PB-MHCB7-2RYQQ'
	},
	'Windows 8': {
		'专业版 WMC [RC]': 'MY4N9-TGH34-4X4VY-8FG2T-RRDPV'
	},
	'Windows 8.1': {
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
	'Windows 8.x': {
		'[Preview]': 'MPWP3-DXNP9-BRD79-W8WFP-3YFJ6'
	},
	'Windows 10 / 11': {
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
	'Windows Server': {
		'Next HI [Preview]': '7VX4N-3VDHQ-VYGHB-JXJVP-9QB26'
	},
	'Windows Server 2008': {
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
	'Windows Server 2012': {
		'Datacenter': '48HP8-DN98B-MYWDG-T2DCC-8W83P',
		'MultiPoint Premium': 'XNH6W-2V9GX-RGJ4K-Y8X6F-QGJ2G',
		'MultiPoint Standard': 'HM7DN-YVMH3-46JC3-XYTG7-CYQJJ',
		'Standard': 'XC9B7-NBPP2-83J2H-RHMBY-92BT4',
		'R2 Cloud Storage': '3NPTF-33KPT-GGBPR-YX76B-39KDD',
		'R2 Datacenter': 'W3GGN-FT8W3-Y4M27-J84CP-Q3VJ9',
		'R2 Essentials': 'KNC87-3J2TX-XB4WP-VCPJV-M4FWM',
		'R2 Standard': 'D2N9P-3P6X9-2R39C-7RTCD-MDVJX'
	},
	'Windows Server 2016': {
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
	'Windows Server 2019': {
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
	'Windows Longhorn': {
		'Web [Preview]': 'MDRCM-4WKCW-J93FF-J9Q48-M6KBB',
		'Standard': 'Q37JX-P3HHB-GKRH2-PDBKG-GGXPW',
		'企业版': '7KYMQ-R788Q-4RF69-KTWKM-92PFJ',
		'Datacenter [Preview]': 'HR8VD-7DHG2-48378-M9D73-28F4T',
		'for Itanium Systems [Preview]': 'CWV9H-PHGPW-V93WV-QBQV9-8V336'
	},
	'Windows MultiPoint': {
		'Server 2010': '736RG-XDKJK-V34PF-BHK87-J6X3K'
	}
};
const down = (e) => {
	let checked;
	let kmskey = document.querySelectorAll('input[name="kms"]');
	kmskey.forEach(e => {
		if (e.checked) {
			checked = true;
			const link = document.createElement('a');
			link.href = 'data:text/plain;base64,' + btoa('slmgr /skms kms-serve.heheda.top\nslmgr /ipk ' + e
				.value + '\nslmgr /ato\nslmgr /xpr');
			link.download = 'kms.bat';
			link.click();
		}
	})
	if (!checked) {
		alert("参数为空，请选择需要激活的系统！")
	}
}
let navc = '';
let sysc = '';
for (let i in sysList) {
	let nsysc = '';
	let endi = i.replace(/\//g, '&').replace(/\s/g, '-');
	navc += '<li><a href="#' + endi + '">' + i + '</a></li>';
	for (let j in sysList[i]) {
		nsysc += '<div class="radio"><label><input type="radio" name="kms" value="' + sysList[i][j] + '">' + i +
			'&nbsp' + j + '</label></div>';
	}
	sysc += '<div class="tab-pane" id="' + endi + '">' + nsysc + '</div>';
}
document.getElementById('nav').innerHTML = navc;
document.getElementById('sys-tab').innerHTML = sysc;