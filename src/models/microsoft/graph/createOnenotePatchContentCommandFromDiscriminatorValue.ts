import {OnenotePatchContentCommand} from './onenotePatchContentCommand';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenotePatchContentCommandFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenotePatchContentCommand {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenotePatchContentCommand();
}
