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
        textContent: 'docmain',
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

    let formObj = {
        parent: doc,
        id: 'formA',
        className: 'form',
        typ: 'form',
		style: {
			margin: '10px',
			border: '1px solid green',
		},
    }
    const formA = azul.addElement(formObj);

    let formHdObj = {
        parent: formA,
        id: 'formATitle',
        className: 'doch3',
        textContent: 'form A',
        typ: 'h3',
    };
    azul.addElement(formHdObj);

    let formDivObj = {
        parent: formA,
        id: 'formALeft',
        className: 'formDiv',
//        textContent: 'Div',
		name: 'FormADiv',
        typ: 'div',
		style: {
			width: '100%',
			border: '1px dashed yellow',
			display: 'flex',
			flexDirection: 'row',
			flexWrap: 'nowrap',
			columnGap: '20px',
		},
    };

    let formADiv = azul.addElement(formDivObj);

    let formSubDivObj = {
        parent: formADiv,
        id: 'formALeft',
        className: 'formDiv',
        textContent: 'Div Left',
		name: 'FormADivL',
        typ: 'div',
		style: {
			width: '100%',
			border: '1px dashed red',
			textAlign: 'center',
		},
    };

    let formADivLeft = azul.addElement(formSubDivObj);

	formSubDivObj.id = 'formARight';
	formSubDivObj.textContent = 'Div Right';
    let formADivRight = azul.addElement(formSubDivObj);


    let listObj = {
        parent: formADivLeft,
        id: 'listA',
        className: 'list',
        typ: 'ul',
		style: {
                margin: '10px',
                border: '1px dashed blue',
		},
    };

	let inpListLeftA = azul.addElement(listObj);

	listObj.parent = formADivRight;
	listObj.id = 'listB';
	let inpListRightA = azul.addElement(listObj);

    let liItemObj = {
        parent: inpListLeftA,
        id: 'listAIt1',
        className: 'liItem',
        typ: 'li',
    };

	let leftLiItem = azul.addElement(liItemObj);


	let inpStylObj = {
    	display: 'block',
    	margin: '1em 0 1em 0',
    	fontSize: '16pt',
    	width: '200px',
    	height: '1em',
    	padding: '0.2em',
	};


	let txtInpObj = {
        parent: leftLiItem ,
        id: 'inpNam',
        className: 'txtinp',
        typ: 'input',
		type: 'text',
		name: 'usrNam',
		placeholder: 'Name',
		style: inpStylObj,
	};

	let inpL1 = azul.addElement(txtInpObj);

	liItemObj.id = 'lileft2';
	leftLiItem = azul.addElement(liItemObj);

	txtInpObj.parent = leftLiItem;
	txtInpObj.name = 'usrFirst';
	txtInpObj.placeholder = 'First';

	let inpL2 = azul.addElement(txtInpObj);

// material design
	liItemObj.parent = inpListRightA;
	let rightLiItem = azul.addElement(liItemObj);

	let labelObj = {
        parent: rightLiItem ,
        id: 'labNam',
        className: 'labInp',
        typ: 'label',
		name: 'inplab',
		textContent: 'Second',
		style: {
			textAlign: 'start',
			display: 'block',
			visibility: 'hidden',
			fontSize: '12pt',
		},
	};

	let labR1 = azul.addElement(labelObj);

	let inpStylMdObj = {
    	display: 'block',
    	margin: '0 0 1em 0',
    	fontSize: '16pt',
    	width: '300px',
    	height: '1em',
    	padding: '0.2em',
		borderWidth: '0',
		outline: 'none',
		borderBottom: '1px solid black',
	};

	let inpStylFocMdObj = {
		borderWidth: '0',
		outline: 'none',
		borderBottom: '2px solid blue',
	};

	txtInpObj.label = labR1;
	txtInpObj.parent = rightLiItem;
	txtInpObj.name = 'usrSec';
	txtInpObj.placeholder = 'Second';
	txtInpObj.style = inpStylMdObj;
	txtInpObj.focusStyle = inpStylFocMdObj;

	let inpR1 = azul.addElement(txtInpObj);

	rightLiItem = azul.addElement(liItemObj);


	labelObj.textContent = 	'Middle';
	let labR2 = azul.addElement(labelObj);

	txtInpObj.parent = rightLiItem;
	txtInpObj.label = labR2;
	txtInpObj.name = 'usrMid';
	txtInpObj.placeholder = 'Middle';

	let inpR2 = azul.addElement(txtInpObj);


	let butStylObj = {
    	backgroundColor: 'green',
    	fontSize: '1.5em',
    	color: 'white',
    	width: '50%',
    	marginLeft: '10em',
    	marginBottom: '1em',
		marginTop: '1em',
    	padding: '0.5em',
    	verticalAlign:'middle',
    	borderRadius: '15px',
		cursor:'default',
	};
	let butHovStylObj = {
		backgroundColor: 'red',
		cursor: 'pointer',
	};

	let butObj = {
        parent: formA,
        id: 'formSub',
        className: 'button',
		type: 'submit',
		name: 'subBut',
		textContent: 'submit',
		style: butStylObj,
		hovStyle: butHovStylObj,
	};

	let submitBut = azul.addButton(butObj);

    document.body.appendChild(this.divMain);

}
