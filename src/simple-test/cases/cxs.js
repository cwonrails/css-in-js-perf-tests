import cxs from 'cxs';
import { containerStyle, buttonStyle, notUsedStyle } from '../styles';
import { renderHtml, renderBody } from '../render';

export const cxsCase = (caseName) => {
    const html = renderBody(caseName, cxs(containerStyle), cxs(buttonStyle), cxs(notUsedStyle));

    const css = cxs.css();

    return renderHtml(css, html);
};
