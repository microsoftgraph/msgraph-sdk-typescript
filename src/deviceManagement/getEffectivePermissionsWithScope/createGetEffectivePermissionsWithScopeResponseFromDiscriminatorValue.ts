import {GetEffectivePermissionsWithScopeResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetEffectivePermissionsWithScopeResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetEffectivePermissionsWithScopeResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetEffectivePermissionsWithScopeResponseImpl();
}
