import {HuntingQueryResults} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHuntingQueryResultsFromDiscriminatorValue(parseNode: ParseNode | undefined) : HuntingQueryResults {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new HuntingQueryResults();
}
