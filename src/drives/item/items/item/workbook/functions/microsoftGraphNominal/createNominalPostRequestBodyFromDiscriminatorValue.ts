import {NominalPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createNominalPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : NominalPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new NominalPostRequestBody();
}
