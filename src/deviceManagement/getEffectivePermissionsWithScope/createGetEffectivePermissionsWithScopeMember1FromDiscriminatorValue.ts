import {GetEffectivePermissionsWithScopeMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetEffectivePermissionsWithScopeMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : GetEffectivePermissionsWithScopeMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetEffectivePermissionsWithScopeMember1();
}
