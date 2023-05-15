import {deserializeIntoOnenotePatchContentCommand} from './deserializeIntoOnenotePatchContentCommand';
import {OnenotePatchContentCommand} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenotePatchContentCommandFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnenotePatchContentCommand;
}
