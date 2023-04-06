import {createBrowserSharedCookieHistoryFromDiscriminatorValue} from './createBrowserSharedCookieHistoryFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, BrowserSharedCookieHistory} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BrowserSharedCookieHistoryCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    /** The value property */
    private _value?: BrowserSharedCookieHistory[] | undefined;
    /**
     * Instantiates a new BrowserSharedCookieHistoryCollectionResponse and sets the default values.
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
            "value": n => { this.value = n.getCollectionOfObjectValues<BrowserSharedCookieHistory>(createBrowserSharedCookieHistoryFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<BrowserSharedCookieHistory>("value", this.value);
    };
    /**
     * Gets the value property value. The value property
     * @returns a browserSharedCookieHistory
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. The value property
     * @param value Value to set for the value property.
     */
    public set value(value: BrowserSharedCookieHistory[] | undefined) {
        this._value = value;
    };
}
