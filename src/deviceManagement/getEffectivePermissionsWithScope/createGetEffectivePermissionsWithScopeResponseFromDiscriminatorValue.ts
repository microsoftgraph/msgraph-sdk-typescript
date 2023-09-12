import { deserializeIntoGetEffectivePermissionsWithScopeResponse } from './deserializeIntoGetEffectivePermissionsWithScopeResponse';
import { type GetEffectivePermissionsWithScopeResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGetEffectivePermissionsWithScopeResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGetEffectivePermissionsWithScopeResponse;
}
