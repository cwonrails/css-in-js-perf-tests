import cxs from 'cxs/monolithic';
import { containerStyle, buttonStyles } from '../styles';
import { renderHtml, renderBody } from '../render';

export const cxsMonolithicCase = (caseName) => {
    const getButtonClassName = i => cxs(buttonStyles[i]);

    const html = renderBody(caseName, cxs(containerStyle), getButtonClassName);

    const css = cxs.getCss();

    return renderHtml(css, html);
};
