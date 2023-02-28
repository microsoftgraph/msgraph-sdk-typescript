import {WeekdayPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWeekdayPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : WeekdayPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WeekdayPostRequestBody();
}
