import { deserializeIntoHuntingQueryResults } from './deserializeIntoHuntingQueryResults';
import { type HuntingQueryResults } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createHuntingQueryResultsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHuntingQueryResults;
}
