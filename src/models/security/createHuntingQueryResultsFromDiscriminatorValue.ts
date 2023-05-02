import {deserializeIntoHuntingQueryResults} from './deserializeIntoHuntingQueryResults';
import {HuntingQueryResults} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHuntingQueryResultsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHuntingQueryResults;
}
