import cxs from 'cxs/lite';
import { createContainerStyle, createButtonStyle } from '../styles';
import { renderHtml, renderBody } from '../render';

export const cxsLiteCase = (caseName) => {
    const html = renderBody(caseName, cxs(createContainerStyle()), cxs(createButtonStyle()));

    const css = cxs.css();

    return renderHtml(css, html);
};
