import {SingleServicePrincipal} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSingleServicePrincipalFromDiscriminatorValue(parseNode: ParseNode | undefined) : SingleServicePrincipal {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SingleServicePrincipal();
}
