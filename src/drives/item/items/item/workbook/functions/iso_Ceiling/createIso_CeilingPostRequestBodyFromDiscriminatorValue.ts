import {Iso_CeilingPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIso_CeilingPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Iso_CeilingPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Iso_CeilingPostRequestBody();
}
