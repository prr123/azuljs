window.onload = (event) => {
    const azul = new HtmlPage;
    let pageObj = {
        id: 'divMain',
        append: 'true',
        style: {width: 'calc(100% - 300px)', border: '1px solid blue', minHeight: '300px',},
	};
	const divMain = azul.init(pageObj);

    let metaObj = {
        metaNames: [
            {name: 'description', content: 'a blog'},
            {name: 'author', content: 'prr'},
            {name: 'date', content: '1/10/2022'},
            ],
    };
    azul.addMeta(metaObj);

    let linkObj = {
        id: 'azulCss',
        type: 'text/css',
        href: 'azulLib.css',
    }
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
    };
//    azul.addElement(hdfooterObj);

    let formObj = {
        parent: doc,
        id: 'formA',
        className: 'form',
        typ: 'div',
		style: {
                margin: '10px',
                border: '1px solid green',
		},
    };
    const formA = azul.addElement(formObj);

    let formHdObj = {
        parent: formA,
        id: 'docmain',
        className: 'doch3',
        textContent: 'formA',
        typ: 'h3',
    };
    azul.addElement(formHdObj);


	let gridDivFunc = function(irow, icol) {
//		gridDiv.textContent = 'div ' + irow + ':' + icol;
	}

	let gridDiv = {
		typ: 'div',
//		gridDivFun: gridDivFunc,
		style: {
			border: '1px dashed red',
			margin: '10px',
		}
	};


	let gridObj = {
		parent: formA,
		typ: 'div',
		gridDivObj: gridDiv,
		rows: 1,
		cols: 2,
	};

	let grid = azul.addGrid(gridObj);
	let rowDiv = grid.cells[0];
	let cellDiv = rowDiv[0];

	let txtInpObj = {
		parent: cellDiv,
		labName: 'Name',
		name: 'usrnam',
	}

//	len inp =[2];

	let inp1 = azul.addMdTextInp(txtInpObj);

	cellDiv = rowDiv[1];
	txtInpObj = {
		parent: cellDiv,
		labName: 'First',
	}

	let inp2 = azul.addMdTextInp(txtInpObj);

}
