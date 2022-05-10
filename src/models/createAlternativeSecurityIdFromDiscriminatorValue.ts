import {AlternativeSecurityIdImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAlternativeSecurityIdFromDiscriminatorValue(parseNode: ParseNode | undefined) : AlternativeSecurityIdImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AlternativeSecurityIdImpl();
}
