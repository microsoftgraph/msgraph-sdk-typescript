import {AccessReviewHistoryDefinition} from './accessReviewHistoryDefinition';
import {AccessReviewScheduleDefinition} from './accessReviewScheduleDefinition';
import {AccessReviewSet} from './accessReviewSet';
import {createAccessReviewHistoryDefinitionFromDiscriminatorValue} from './createAccessReviewHistoryDefinitionFromDiscriminatorValue';
import {createAccessReviewScheduleDefinitionFromDiscriminatorValue} from './createAccessReviewScheduleDefinitionFromDiscriminatorValue';
import {AccessReviewHistoryDefinitionImpl, AccessReviewScheduleDefinitionImpl, EntityImpl} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class AccessReviewSetImpl extends EntityImpl implements AccessReviewSet {
    /** Represents the template and scheduling for an access review. */
    private _definitions?: AccessReviewScheduleDefinition[] | undefined;
    /** Represents a collection of access review history data and the scopes used to collect that data. */
    private _historyDefinitions?: AccessReviewHistoryDefinition[] | undefined;
    /**
     * Instantiates a new accessReviewSet and sets the default values.
     * @param accessReviewSetParameterValue 
     */
    public constructor(accessReviewSetParameterValue?: AccessReviewSet | undefined) {
        super(accessReviewSetParameterValue);
        this._definitions = accessReviewSetParameterValue?.definitions;
        this._historyDefinitions = accessReviewSetParameterValue?.historyDefinitions;
    };
    /**
     * Gets the definitions property value. Represents the template and scheduling for an access review.
     * @returns a AccessReviewScheduleDefinitionInterface
     */
    public get definitions() {
        return this._definitions;
    };
    /**
     * Sets the definitions property value. Represents the template and scheduling for an access review.
     * @param value Value to set for the definitions property.
     */
    public set definitions(value: AccessReviewScheduleDefinition[] | undefined) {
        if(value) {
            const definitionsArrValue: AccessReviewScheduleDefinitionImpl[] = [];
            this.definitions?.forEach(element => {
                definitionsArrValue.push((element instanceof AccessReviewScheduleDefinitionImpl? element as AccessReviewScheduleDefinitionImpl:new AccessReviewScheduleDefinitionImpl(element)));
            });
            this._definitions = definitionsArrValue;
        }
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
     * Gets the historyDefinitions property value. Represents a collection of access review history data and the scopes used to collect that data.
     * @returns a AccessReviewHistoryDefinitionInterface
     */
    public get historyDefinitions() {
        return this._historyDefinitions;
    };
    /**
     * Sets the historyDefinitions property value. Represents a collection of access review history data and the scopes used to collect that data.
     * @param value Value to set for the historyDefinitions property.
     */
    public set historyDefinitions(value: AccessReviewHistoryDefinition[] | undefined) {
        if(value) {
            const historyDefinitionsArrValue: AccessReviewHistoryDefinitionImpl[] = [];
            this.historyDefinitions?.forEach(element => {
                historyDefinitionsArrValue.push((element instanceof AccessReviewHistoryDefinitionImpl? element as AccessReviewHistoryDefinitionImpl:new AccessReviewHistoryDefinitionImpl(element)));
            });
            this._historyDefinitions = historyDefinitionsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.definitions && this.definitions.length != 0){        const definitionsArrValue: AccessReviewScheduleDefinitionImpl[] = [];
        this.definitions?.forEach(element => {
            definitionsArrValue.push((element instanceof AccessReviewScheduleDefinitionImpl? element as AccessReviewScheduleDefinitionImpl:new AccessReviewScheduleDefinitionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AccessReviewScheduleDefinitionImpl>("definitions", definitionsArrValue);
        }
        if(this.historyDefinitions && this.historyDefinitions.length != 0){        const historyDefinitionsArrValue: AccessReviewHistoryDefinitionImpl[] = [];
        this.historyDefinitions?.forEach(element => {
            historyDefinitionsArrValue.push((element instanceof AccessReviewHistoryDefinitionImpl? element as AccessReviewHistoryDefinitionImpl:new AccessReviewHistoryDefinitionImpl(element)));
        });
            writer.writeCollectionOfObjectValues<AccessReviewHistoryDefinitionImpl>("historyDefinitions", historyDefinitionsArrValue);
        }
    };
}
