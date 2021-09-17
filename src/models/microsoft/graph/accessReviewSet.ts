import {AccessReviewScheduleDefinition} from './accessReviewScheduleDefinition';
import {Entity} from './entity';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class AccessReviewSet extends Entity implements Parsable {
    private _definitions?: AccessReviewScheduleDefinition[] | undefined;
    /**
     * Instantiates a new accessReviewSet and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the definitions property value. 
     * @returns a accessReviewScheduleDefinition
     */
    public get definitions() {
        return this._definitions;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["definitions", (o, n) => { (o as unknown as AccessReviewSet).definitions = n.getCollectionOfObjectValues<AccessReviewScheduleDefinition>(AccessReviewScheduleDefinition); }],
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
    };
    /**
     * Sets the definitions property value. 
     * @param value Value to set for the definitions property.
     */
    public set definitions(value: AccessReviewScheduleDefinition[] | undefined) {
        this._definitions = value;
    };
}
