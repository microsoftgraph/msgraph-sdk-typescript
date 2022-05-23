import {ApplicationTemplateImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createApplicationTemplateFromDiscriminatorValue(parseNode: ParseNode | undefined) : ApplicationTemplateImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ApplicationTemplateImpl();
}
