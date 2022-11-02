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
        id: 'docmain',
        className: 'doch3',
        textContent: 'formA',
        typ: 'h3',
    };
    azul.addElement(formHdObj);

    let liParObj = {
        parent: formA,
        id: 'listA',
        className: 'list',
        typ: 'ul',
		style: {
                margin: '10px',
                border: '1px dashed blue',
		},
    };

	let inpListA = azul.addElement(liParObj);

	let inpStylObj = {
    	display: 'block',
    	margin: '1em 0 1em 0',
    	fontSize: '16pt',
    	width: '200px',
    	height: '1em',
    	padding: '0.2em',
	};

    let liItemObj = {
        parent: inpListA,
        id: 'listAIt1',
        className: 'liItem',
        typ: 'li',
    };

	let liItem = azul.addElement(liItemObj);

	let txtInpObj = {
        parent: liItem ,
        id: 'inpNam',
        className: 'txtinp',
        typ: 'input',
		type: 'text',
		name: 'usrNam',
		placeholder: 'name',
		style: inpStylObj,
	};

	let inp1 = azul.addElement(txtInpObj);

	let txtInpObj2 = {
        parent: liItem ,
        id: 'inpFirst',
        className: 'txtinp',
        typ: 'input',
		type: 'text',
		name: 'usrFirst',
		placeholder: 'first',
		style: inpStylObj,
	};

	let inp2 = azul.addElement(txtInpObj2);

	let butStylObj = {
    	backgroundColor: 'green',
    	fontSize: '1.5em',
    	color: 'white',
    	width: '50%',
    	marginLeft: '10em',
    	marginBottom: '1em',
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
