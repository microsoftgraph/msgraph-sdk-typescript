import {AccessReviewHistoryDefinition} from './accessReviewHistoryDefinition';
import {AccessReviewScheduleDefinition} from './accessReviewScheduleDefinition';
import {Entity} from './entity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AccessReviewSet extends Entity implements Parsable {
    /** Represents the template and scheduling for an access review.  */
    private _definitions?: AccessReviewScheduleDefinition[] | undefined;
    /** Represents a collection of access review history data and the scopes used to collect that data.  */
    private _historyDefinitions?: AccessReviewHistoryDefinition[] | undefined;
    /**
     * Instantiates a new accessReviewSet and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the definitions property value. Represents the template and scheduling for an access review.
     * @returns a accessReviewScheduleDefinition
     */
    public get definitions() {
        return this._definitions;
    };
    /**
     * Gets the historyDefinitions property value. Represents a collection of access review history data and the scopes used to collect that data.
     * @returns a accessReviewHistoryDefinition
     */
    public get historyDefinitions() {
        return this._historyDefinitions;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["definitions", (o, n) => { (o as unknown as AccessReviewSet).definitions = n.getCollectionOfObjectValues<AccessReviewScheduleDefinition>(AccessReviewScheduleDefinition); }],
            ["historyDefinitions", (o, n) => { (o as unknown as AccessReviewSet).historyDefinitions = n.getCollectionOfObjectValues<AccessReviewHistoryDefinition>(AccessReviewHistoryDefinition); }],
        ]);
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
    /**
     * Sets the definitions property value. Represents the template and scheduling for an access review.
     * @param value Value to set for the definitions property.
     */
    public set definitions(value: AccessReviewScheduleDefinition[] | undefined) {
        this._definitions = value;
    };
    /**
     * Sets the historyDefinitions property value. Represents a collection of access review history data and the scopes used to collect that data.
     * @param value Value to set for the historyDefinitions property.
     */
    public set historyDefinitions(value: AccessReviewHistoryDefinition[] | undefined) {
        this._historyDefinitions = value;
    };
}
