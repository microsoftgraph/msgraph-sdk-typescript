import {SecurityReportsRoot} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSecurityReportsRootFromDiscriminatorValue(parseNode: ParseNode | undefined) : SecurityReportsRoot {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SecurityReportsRoot();
}
