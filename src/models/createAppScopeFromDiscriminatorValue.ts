import {AppScopeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAppScopeFromDiscriminatorValue(parseNode: ParseNode | undefined) : AppScopeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AppScopeImpl();
}
