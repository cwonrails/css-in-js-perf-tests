import cxs from 'cxs/lite';
import { containerStyle, buttonStyle, notUsedStyle } from '../styles';
import { renderHtml, renderBody } from '../render';

export const cxsLiteCase = (caseName) => {
    const html = renderBody(caseName, cxs(containerStyle), cxs(buttonStyle), cxs(notUsedStyle));

    const css = cxs.getCss();

    cxs.reset();

    return renderHtml(css, html);
};
