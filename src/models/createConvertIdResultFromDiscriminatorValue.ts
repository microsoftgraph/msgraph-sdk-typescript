import {deserializeIntoConvertIdResult} from './deserializeIntoConvertIdResult';
import {ConvertIdResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConvertIdResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConvertIdResult;
}
