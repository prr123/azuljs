  window.onload = (event) => {
    const azul = new HtmlPage;
    let pageObj = {
        mainDiv: {
            style: {
                width: 'calc(100% - 300px)',
                border: '1px solid blue',
                minHeight: '300px',
            },
            id: 'divMain',
        },
	};
	const divMain = azul.init(pageObj);

	let headerObj = {
		id: 'header',
		menuObj: {
	    	id: 'mainMenu',
			style: {
    			width: '300px',
    			minHeight: '500px',
    			margin: '10px',
    			border: '1px solid green',
    			position: 'absolute',
    			top: '0px',
   				left: '0px',
    			zIndex: '1',
    			backgroundColor: 'white',
    			display: 'block',
				parent: azul.doc,
			},
			MainMenu: {
				home: '',
				test: 'gdocTest.json',
				products: 'products.json',
				services: 'services.json',
				examples: 'example.json',
				Blogs: 'blogs.json',
			},
		},

    };

    let metaObj = {
        metaNames: [
            {name: 'description', content: 'a blog'},
            {name: 'author', content: 'prr'},
            {name: 'date', content: '1/10/2022'},
            ],
    };

    let linkObj = {
        id: 'azulCss',
        type: 'text/css',
        href: 'azulLib.css',
    }

    azul.addMeta(metaObj);

//    azul.addLink(linkObj);


    let stylObj = {};
    azul.addStyles(stylObj);

	let cssRuleObj = {
		cssRules:['.doch3 {color: blue; text-align: center;}'],
	};

	azul.addCssRule(cssRuleObj);


	let secObj = {
		typ: 'section',
		parent: this.divMain,
		id: 'doc',
 		name: 'docmain',
      className: 'azulSection',
		style: {
                minHeight: '500px',
                margin: '10px',
                border: '1px solid Tomato',
                position: 'relative',
		},
	};


    let hdStyl = {
        color: 'MediumPurple',
        margin: 'auto',
        textAlign: 'center',
        padding: '0.5em',
    };


    let hdObj = {
        style: hdStyl,
        parent: this.divMain,
        id: 'header',
        className: 'doch3',
        textContent: 'gdoc test',
        typ: 'h3',
		style: {
                margin: '10px',
                border: '1px solid green',
		},
    }

    azul.addElement(hdObj);

	const doc = azul.addElement(secObj);


    let hd2Obj = {
        style: hdStyl,
        parent: doc,
        id: 'docmain',
        className: 'doch3',
        textContent: 'date picker',
        typ: 'h3',
    }
    azul.addElement(hd2Obj);

    let hdfooterObj = {
        style: hdStyl,
        parent: azul.footer,
        id: 'footer',
        className: 'doch3',
        textContent: 'footer',
        typ: 'h3',
    }
//    azul.addElement(hdfooterObj);

    let datePickDivObj = {
        parent: doc,
        id: 'datpickdiv',
        typ: 'div',
		style: {
			margin: '10px 0',
			border: '1px solid green',
			minHeight: '50px',
		},
    }
    const datePickDiv = azul.addElement(datePickDivObj);

	let datePickInp = {
        parent: datePickDiv,
        id: 'datpickInp',
        typ: 'input',
		type: 'date',
	};
	let datPickInpEl = azul.addElement(datePickInp);

    let dateTabDivObj = {
        parent: doc,
        id: 'datpicktab',
        className: 'datpick',
        typ: 'div',
		style: {
			margin: '10px 0',
			width: '300px',
			border: '1px solid black',
			height: '400px',
		},
    }

    const dateTableDiv = azul.addElement(dateTabDivObj);

    let dateTabHdObj = {
        parent: dateTableDiv,
        id: 'datTabHd',
        className: 'datTabHd',
        typ: 'div',
		style: {
			backgroundColor: '#CCCCFF',
			height: '50px',
		},
    }

    const dateTabHd = azul.addElement(dateTabHdObj);

	// element for date
    let dateTabHd2Obj = {
        parent: dateTableDiv,
        id: 'datTabHd2',
        typ: 'div',
		style: {
			backgroundColor: '#CCCCFF',
			height: '50px',
			display: 'flex',
			flexWrap: 'no-wrap',
			flexDirection: 'row',
			justifyContent: 'space-evenly',
		},
    }

	const monthList = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

    const dateTabHd2 = azul.addElement(dateTabHd2Obj);

        let iconObj = {
            parent: dateTabHd2,
//            exitEl: menuDiv,
            id: 'movPrevMonth',
            iconType: 'left',
            size: '32',
            svgStyle: {
                cursor: 'default',
                display: 'inline',
            },
            style: {
                stroke: 'green',
				fill: 'green',
                cursor: 'default',
            },
            hovStyle: {
                stroke: 'red',
				fill: 'red',
                cursor: 'pointer',
            },
        };

	let iconLeft = azul.createIcon(iconObj);

	const selObj = {
		parent: dateTabHd2,
		id: 'selMonth',
		selOptions: monthList,
	}

	let monthInp = azul.addSelect(selObj);

	iconObj.iconType = 'right';
	let iconRight = azul.createIcon(iconObj);



	const days = ['Mo','Tu','We','Th','Fr','Sa','Su']

    let datesTabObj = {
        parent: dateTableDiv,
        id: 'datTab',
        typ: 'div',
        style: {
			border: '1px solid blue',
            height: '250px',
			display: 'flex',
			flexWrap: 'wrap',
			flexDirection: 'row',
			rowGap: '2px',
			justifyContent: 'space-evenly',
			cursor:'pointer',
        },
    }

    const datesTab = azul.addElement(datesTabObj);

    let dateElObj = {
        parent: datesTab,
        id: 'datEl',
        className: 'datEls',
        typ: 'div',
        style: {
			border: '1px solid black',
			margin: '1px',
            height: '30px',
			width: '38px',
			textAlign: 'center',
			lineHeight: '30px',
			cursor: 'none',
        },
		hovStyle: {
			cursor: 'none',
		}
    }

	for (i=0; i< 7; i++) {
		dateElObj.textContent = days[i];
    	let datesHdEl = azul.addElement(dateElObj);
	}


	dateElObj.style.cursor = 'pointer';
	dateElObj.hovStyle.cursor = 'pointer';
	let datesEl = [42]
	for (i=7; i< 49; i++) {
		dateElObj.textContent = i -6;
    	datesEl[i-7] = azul.addElement(dateElObj);
	}

    const dateTabFt = azul.addElement(dateTabHdObj);

    document.body.appendChild(this.divMain);

}
