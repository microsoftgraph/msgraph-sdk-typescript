import {ActionResultPart} from './actionResultPart';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createActionResultPartFromDiscriminatorValue(parseNode: ParseNode | undefined) : ActionResultPart {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ActionResultPart();
}
