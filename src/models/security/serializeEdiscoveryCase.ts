import type {IdentitySet} from '../identitySet';
import {serializeIdentitySet} from '../serializeIdentitySet';
import type {CaseOperation} from './caseOperation';
import type {EdiscoveryCase} from './ediscoveryCase';
import type {EdiscoveryCaseSettings} from './ediscoveryCaseSettings';
import type {EdiscoveryCustodian} from './ediscoveryCustodian';
import type {EdiscoveryNoncustodialDataSource} from './ediscoveryNoncustodialDataSource';
import type {EdiscoveryReviewSet} from './ediscoveryReviewSet';
import type {EdiscoveryReviewTag} from './ediscoveryReviewTag';
import type {EdiscoverySearch} from './ediscoverySearch';
import {serializeCaseEscaped} from './serializeCaseEscaped';
import {serializeCaseOperation} from './serializeCaseOperation';
import {serializeEdiscoveryCaseSettings} from './serializeEdiscoveryCaseSettings';
import {serializeEdiscoveryCustodian} from './serializeEdiscoveryCustodian';
import {serializeEdiscoveryNoncustodialDataSource} from './serializeEdiscoveryNoncustodialDataSource';
import {serializeEdiscoveryReviewSet} from './serializeEdiscoveryReviewSet';
import {serializeEdiscoveryReviewTag} from './serializeEdiscoveryReviewTag';
import {serializeEdiscoverySearch} from './serializeEdiscoverySearch';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEdiscoveryCase(writer: SerializationWriter, ediscoveryCase: EdiscoveryCase | undefined = {} as EdiscoveryCase) : void {
        serializeCaseEscaped(writer, ediscoveryCase)
        writer.writeObjectValue<IdentitySet>("closedBy", ediscoveryCase.closedBy, serializeIdentitySet);
        writer.writeDateValue("closedDateTime", ediscoveryCase.closedDateTime);
        writer.writeCollectionOfObjectValues<EdiscoveryCustodian>("custodians", ediscoveryCase.custodians, serializeEdiscoveryCustodian);
        writer.writeStringValue("externalId", ediscoveryCase.externalId);
        writer.writeCollectionOfObjectValues<EdiscoveryNoncustodialDataSource>("noncustodialDataSources", ediscoveryCase.noncustodialDataSources, serializeEdiscoveryNoncustodialDataSource);
        writer.writeCollectionOfObjectValues<CaseOperation>("operations", ediscoveryCase.operations, serializeCaseOperation);
        writer.writeCollectionOfObjectValues<EdiscoveryReviewSet>("reviewSets", ediscoveryCase.reviewSets, serializeEdiscoveryReviewSet);
        writer.writeCollectionOfObjectValues<EdiscoverySearch>("searches", ediscoveryCase.searches, serializeEdiscoverySearch);
        writer.writeObjectValue<EdiscoveryCaseSettings>("settings", ediscoveryCase.settings, serializeEdiscoveryCaseSettings);
        writer.writeCollectionOfObjectValues<EdiscoveryReviewTag>("tags", ediscoveryCase.tags, serializeEdiscoveryReviewTag);
}
