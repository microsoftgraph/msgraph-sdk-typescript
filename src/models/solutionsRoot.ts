import {createBookingBusinessFromDiscriminatorValue} from './createBookingBusinessFromDiscriminatorValue';
import {createBookingCurrencyFromDiscriminatorValue} from './createBookingCurrencyFromDiscriminatorValue';
import {BookingBusiness, BookingCurrency} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SolutionsRoot implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _bookingBusinesses?: BookingBusiness[] | undefined;
    private _bookingCurrencies?: BookingCurrency[] | undefined;
    private _odataType?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Gets the bookingBusinesses property value. 
     * @returns a bookingBusiness
     */
    public get bookingBusinesses() {
        return this._bookingBusinesses;
    };
    /**
     * Sets the bookingBusinesses property value. 
     * @param value Value to set for the bookingBusinesses property.
     */
    public set bookingBusinesses(value: BookingBusiness[] | undefined) {
        this._bookingBusinesses = value;
    };
    /**
     * Gets the bookingCurrencies property value. 
     * @returns a bookingCurrency
     */
    public get bookingCurrencies() {
        return this._bookingCurrencies;
    };
    /**
     * Sets the bookingCurrencies property value. 
     * @param value Value to set for the bookingCurrencies property.
     */
    public set bookingCurrencies(value: BookingCurrency[] | undefined) {
        this._bookingCurrencies = value;
    };
    /**
     * Instantiates a new SolutionsRoot and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "bookingBusinesses": n => { this.bookingBusinesses = n.getCollectionOfObjectValues<BookingBusiness>(createBookingBusinessFromDiscriminatorValue); },
            "bookingCurrencies": n => { this.bookingCurrencies = n.getCollectionOfObjectValues<BookingCurrency>(createBookingCurrencyFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<BookingBusiness>("bookingBusinesses", this.bookingBusinesses);
        writer.writeCollectionOfObjectValues<BookingCurrency>("bookingCurrencies", this.bookingCurrencies);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
