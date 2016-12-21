import cxs from 'cxs/monolithic';
import { createContainerStyle, createButtonStyle } from '../styles';
import { renderHtml, renderBody } from '../render';

export const cxsMonolithicCase = (caseName) => {
    const html = renderBody(caseName, cxs(createContainerStyle()), cxs(createButtonStyle()));

    const css = cxs.css();

    cxs.reset();

    return renderHtml(css, html);
};
