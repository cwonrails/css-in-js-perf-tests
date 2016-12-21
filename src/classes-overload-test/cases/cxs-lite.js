import cxs from 'cxs/lite';
import { containerStyle, buttonStyles } from '../styles';
import { renderHtml, renderBody } from '../render';

export const cxsLiteCase = (caseName) => {
    const getButtonClassName = i => cxs(buttonStyles[i]);

    const html = renderBody(caseName, cxs(containerStyle), getButtonClassName);

    const css = cxs.css();

    cxs.reset();

    return renderHtml(css, html);
};
