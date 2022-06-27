import {AccessReviewHistoryDefinition} from './accessReviewHistoryDefinition';
import {AccessReviewScheduleDefinition} from './accessReviewScheduleDefinition';
import {AccessReviewSet} from './accessReviewSet';
import {createAccessReviewHistoryDefinitionFromDiscriminatorValue} from './createAccessReviewHistoryDefinitionFromDiscriminatorValue';
import {createAccessReviewScheduleDefinitionFromDiscriminatorValue} from './createAccessReviewScheduleDefinitionFromDiscriminatorValue';
import {AccessReviewHistoryDefinitionImpl, AccessReviewScheduleDefinitionImpl, EntityImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewSetImpl extends EntityImpl implements AccessReviewSet {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Represents the template and scheduling for an access review. */
    public definitions?: AccessReviewScheduleDefinition[] | undefined;
    /** Represents a collection of access review history data and the scopes used to collect that data. */
    public historyDefinitions?: AccessReviewHistoryDefinition[] | undefined;
    /**
     * Instantiates a new AccessReviewSet and sets the default values.
     * @param accessReviewSetParameterValue 
     */
    public constructor(accessReviewSetParameterValue?: AccessReviewSet | undefined) {
        super(accessReviewSetParameterValue);
        this.additionalData = accessReviewSetParameterValue?.additionalData ? accessReviewSetParameterValue?.additionalData! : {};
        const definitionsArrValue: AccessReviewScheduleDefinitionImpl[] = []; accessReviewSetParameterValue.definitions?.forEach(element => {definitionsArrValue.push(element instanceof AccessReviewScheduleDefinitionImpl? element : new AccessReviewScheduleDefinitionImpl(element));});
        this.definitions = definitionsArrValue;
        const historyDefinitionsArrValue: AccessReviewHistoryDefinitionImpl[] = []; accessReviewSetParameterValue.historyDefinitions?.forEach(element => {historyDefinitionsArrValue.push(element instanceof AccessReviewHistoryDefinitionImpl? element : new AccessReviewHistoryDefinitionImpl(element));});
        this.historyDefinitions = historyDefinitionsArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "definitions": n => { this.definitions = n.getCollectionOfObjectValues<AccessReviewScheduleDefinitionImpl>(createAccessReviewScheduleDefinitionFromDiscriminatorValue); },
            "historyDefinitions": n => { this.historyDefinitions = n.getCollectionOfObjectValues<AccessReviewHistoryDefinitionImpl>(createAccessReviewHistoryDefinitionFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.definitions && this.definitions.length != 0){        const definitionsArrValue: AccessReviewScheduleDefinitionImpl[] = []; this.definitions?.forEach(element => {definitionsArrValue.push(element instanceof AccessReviewScheduleDefinitionImpl? element : new AccessReviewScheduleDefinitionImpl(element));});
            writer.writeCollectionOfObjectValues<AccessReviewScheduleDefinitionImpl>("definitions", definitionsArrValue);
        }
        if(this.historyDefinitions && this.historyDefinitions.length != 0){        const historyDefinitionsArrValue: AccessReviewHistoryDefinitionImpl[] = []; this.historyDefinitions?.forEach(element => {historyDefinitionsArrValue.push(element instanceof AccessReviewHistoryDefinitionImpl? element : new AccessReviewHistoryDefinitionImpl(element));});
            writer.writeCollectionOfObjectValues<AccessReviewHistoryDefinitionImpl>("historyDefinitions", historyDefinitionsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
