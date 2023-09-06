import { deserializeIntoOnenotePatchContentCommand } from './deserializeIntoOnenotePatchContentCommand';
import { type OnenotePatchContentCommand } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createOnenotePatchContentCommandFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoOnenotePatchContentCommand;
}
