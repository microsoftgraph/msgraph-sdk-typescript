import {GetManagedAppDiagnosticStatusesMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetManagedAppDiagnosticStatusesMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : GetManagedAppDiagnosticStatusesMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetManagedAppDiagnosticStatusesMember1();
}
