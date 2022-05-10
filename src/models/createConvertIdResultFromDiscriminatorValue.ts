import {ConvertIdResultImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createConvertIdResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : ConvertIdResultImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ConvertIdResultImpl();
}
