import {Entity} from '../';
import {createRetentionEventFromDiscriminatorValue} from './createRetentionEventFromDiscriminatorValue';
import {RetentionEvent} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TriggersRoot extends Entity implements Parsable {
    /** The retentionEvents property */
    private _retentionEvents?: RetentionEvent[] | undefined;
    /**
     * Instantiates a new triggersRoot and sets the default values.
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
            "retentionEvents": n => { this.retentionEvents = n.getCollectionOfObjectValues<RetentionEvent>(createRetentionEventFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the retentionEvents property value. The retentionEvents property
     * @returns a retentionEvent
     */
    public get retentionEvents() {
        return this._retentionEvents;
    };
    /**
     * Sets the retentionEvents property value. The retentionEvents property
     * @param value Value to set for the retentionEvents property.
     */
    public set retentionEvents(value: RetentionEvent[] | undefined) {
        this._retentionEvents = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<RetentionEvent>("retentionEvents", this.retentionEvents);
    };
}
