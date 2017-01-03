import cxs from 'cxs';
import { createContainerStyle, createButtonStyle } from '../styles';
import { renderHtml, renderBody } from '../render';

export const cxsCase = (caseName) => {
    const html = renderBody(caseName, cxs(createContainerStyle()), cxs(createButtonStyle()));

    const css = cxs.getCss();

    cxs.reset();

    return renderHtml(css, html);
};
