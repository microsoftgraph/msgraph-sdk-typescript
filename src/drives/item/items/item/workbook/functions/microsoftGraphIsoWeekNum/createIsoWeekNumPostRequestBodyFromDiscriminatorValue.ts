import {IsoWeekNumPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIsoWeekNumPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : IsoWeekNumPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new IsoWeekNumPostRequestBody();
}
