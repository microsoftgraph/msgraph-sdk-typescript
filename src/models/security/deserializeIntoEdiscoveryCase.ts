import {createIdentitySetFromDiscriminatorValue} from '../createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from '../identitySet';
import {serializeIdentitySet} from '../serializeIdentitySet';
import {CaseOperation} from './caseOperation';
import {createCaseOperationFromDiscriminatorValue} from './createCaseOperationFromDiscriminatorValue';
import {createEdiscoveryCaseSettingsFromDiscriminatorValue} from './createEdiscoveryCaseSettingsFromDiscriminatorValue';
import {createEdiscoveryCustodianFromDiscriminatorValue} from './createEdiscoveryCustodianFromDiscriminatorValue';
import {createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue} from './createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue';
import {createEdiscoveryReviewSetFromDiscriminatorValue} from './createEdiscoveryReviewSetFromDiscriminatorValue';
import {createEdiscoveryReviewTagFromDiscriminatorValue} from './createEdiscoveryReviewTagFromDiscriminatorValue';
import {createEdiscoverySearchFromDiscriminatorValue} from './createEdiscoverySearchFromDiscriminatorValue';
import {deserializeIntoCaseEscaped} from './deserializeIntoCaseEscaped';
import {EdiscoveryCase} from './ediscoveryCase';
import {EdiscoveryCaseSettings} from './ediscoveryCaseSettings';
import {EdiscoveryCustodian} from './ediscoveryCustodian';
import {EdiscoveryNoncustodialDataSource} from './ediscoveryNoncustodialDataSource';
import {EdiscoveryReviewSet} from './ediscoveryReviewSet';
import {EdiscoveryReviewTag} from './ediscoveryReviewTag';
import {EdiscoverySearch} from './ediscoverySearch';
import {serializeCaseOperation} from './serializeCaseOperation';
import {serializeEdiscoveryCaseSettings} from './serializeEdiscoveryCaseSettings';
import {serializeEdiscoveryCustodian} from './serializeEdiscoveryCustodian';
import {serializeEdiscoveryNoncustodialDataSource} from './serializeEdiscoveryNoncustodialDataSource';
import {serializeEdiscoveryReviewSet} from './serializeEdiscoveryReviewSet';
import {serializeEdiscoveryReviewTag} from './serializeEdiscoveryReviewTag';
import {serializeEdiscoverySearch} from './serializeEdiscoverySearch';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEdiscoveryCase(ediscoveryCase: EdiscoveryCase | undefined = {} as EdiscoveryCase) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoCaseEscaped(ediscoveryCase),
        "closedBy": n => { ediscoveryCase.closedBy = n.getObjectValue<IdentitySet>(createIdentitySetFromDiscriminatorValue); },
        "closedDateTime": n => { ediscoveryCase.closedDateTime = n.getDateValue(); },
        "custodians": n => { ediscoveryCase.custodians = n.getCollectionOfObjectValues<EdiscoveryCustodian>(createEdiscoveryCustodianFromDiscriminatorValue); },
        "externalId": n => { ediscoveryCase.externalId = n.getStringValue(); },
        "noncustodialDataSources": n => { ediscoveryCase.noncustodialDataSources = n.getCollectionOfObjectValues<EdiscoveryNoncustodialDataSource>(createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue); },
        "operations": n => { ediscoveryCase.operations = n.getCollectionOfObjectValues<CaseOperation>(createCaseOperationFromDiscriminatorValue); },
        "reviewSets": n => { ediscoveryCase.reviewSets = n.getCollectionOfObjectValues<EdiscoveryReviewSet>(createEdiscoveryReviewSetFromDiscriminatorValue); },
        "searches": n => { ediscoveryCase.searches = n.getCollectionOfObjectValues<EdiscoverySearch>(createEdiscoverySearchFromDiscriminatorValue); },
        "settings": n => { ediscoveryCase.settings = n.getObjectValue<EdiscoveryCaseSettings>(createEdiscoveryCaseSettingsFromDiscriminatorValue); },
        "tags": n => { ediscoveryCase.tags = n.getCollectionOfObjectValues<EdiscoveryReviewTag>(createEdiscoveryReviewTagFromDiscriminatorValue); },
    }
}
