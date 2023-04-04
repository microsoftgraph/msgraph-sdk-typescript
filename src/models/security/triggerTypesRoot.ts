import {Entity} from '../';
import {createRetentionEventTypeFromDiscriminatorValue} from './createRetentionEventTypeFromDiscriminatorValue';
import {RetentionEventType} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TriggerTypesRoot extends Entity implements Parsable {
    /** The retentionEventTypes property */
    private _retentionEventTypes?: RetentionEventType[] | undefined;
    /**
     * Instantiates a new triggerTypesRoot and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "retentionEventTypes": n => { this.retentionEventTypes = n.getCollectionOfObjectValues<RetentionEventType>(createRetentionEventTypeFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the retentionEventTypes property value. The retentionEventTypes property
     * @returns a retentionEventType
     */
    public get retentionEventTypes() {
        return this._retentionEventTypes;
    };
    /**
     * Sets the retentionEventTypes property value. The retentionEventTypes property
     * @param value Value to set for the retentionEventTypes property.
     */
    public set retentionEventTypes(value: RetentionEventType[] | undefined) {
        this._retentionEventTypes = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<RetentionEventType>("retentionEventTypes", this.retentionEventTypes);
    };
}
