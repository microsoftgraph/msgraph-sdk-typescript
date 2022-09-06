import {createAccessReviewHistoryDefinitionFromDiscriminatorValue} from './createAccessReviewHistoryDefinitionFromDiscriminatorValue';
import {createAccessReviewScheduleDefinitionFromDiscriminatorValue} from './createAccessReviewScheduleDefinitionFromDiscriminatorValue';
import {AccessReviewHistoryDefinition, AccessReviewScheduleDefinition, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewSet extends Entity implements Parsable {
    /** Represents the template and scheduling for an access review. */
    private _definitions?: AccessReviewScheduleDefinition[] | undefined;
    /** Represents a collection of access review history data and the scopes used to collect that data. */
    private _historyDefinitions?: AccessReviewHistoryDefinition[] | undefined;
    /**
     * Instantiates a new AccessReviewSet and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.accessReviewSet";
    };
    /**
     * Gets the definitions property value. Represents the template and scheduling for an access review.
     * @returns a accessReviewScheduleDefinition
     */
    public get definitions() {
        return this._definitions;
    };
    /**
     * Sets the definitions property value. Represents the template and scheduling for an access review.
     * @param value Value to set for the definitions property.
     */
    public set definitions(value: AccessReviewScheduleDefinition[] | undefined) {
        this._definitions = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "definitions": n => { this.definitions = n.getCollectionOfObjectValues<AccessReviewScheduleDefinition>(createAccessReviewScheduleDefinitionFromDiscriminatorValue); },
            "historyDefinitions": n => { this.historyDefinitions = n.getCollectionOfObjectValues<AccessReviewHistoryDefinition>(createAccessReviewHistoryDefinitionFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the historyDefinitions property value. Represents a collection of access review history data and the scopes used to collect that data.
     * @returns a accessReviewHistoryDefinition
     */
    public get historyDefinitions() {
        return this._historyDefinitions;
    };
    /**
     * Sets the historyDefinitions property value. Represents a collection of access review history data and the scopes used to collect that data.
     * @param value Value to set for the historyDefinitions property.
     */
    public set historyDefinitions(value: AccessReviewHistoryDefinition[] | undefined) {
        this._historyDefinitions = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<AccessReviewScheduleDefinition>("definitions", this.definitions);
        writer.writeCollectionOfObjectValues<AccessReviewHistoryDefinition>("historyDefinitions", this.historyDefinitions);
    };
}
