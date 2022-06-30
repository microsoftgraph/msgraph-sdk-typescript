import {BookingBusiness} from './bookingBusiness';
import {BookingCurrency} from './bookingCurrency';
import {createBookingBusinessFromDiscriminatorValue} from './createBookingBusinessFromDiscriminatorValue';
import {createBookingCurrencyFromDiscriminatorValue} from './createBookingCurrencyFromDiscriminatorValue';
import {BookingBusinessImpl, BookingCurrencyImpl} from './index';
import {SolutionsRoot} from './solutionsRoot';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SolutionsRootImpl implements SolutionsRoot {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The bookingBusinesses property */
    private _bookingBusinesses?: BookingBusiness[] | undefined;
    /** The bookingCurrencies property */
    private _bookingCurrencies?: BookingCurrency[] | undefined;
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the bookingBusinesses property value. The bookingBusinesses property
     * @returns a BookingBusinessInterface
     */
    public get bookingBusinesses() {
        return this._bookingBusinesses;
    };
    /**
     * Sets the bookingBusinesses property value. The bookingBusinesses property
     * @param value Value to set for the bookingBusinesses property.
     */
    public set bookingBusinesses(value: BookingBusiness[] | undefined) {
        if(value) {
            const bookingBusinessesArrValue: BookingBusinessImpl[] = [];
            this.bookingBusinesses?.forEach(element => {
                bookingBusinessesArrValue.push((element instanceof BookingBusinessImpl? element:new BookingBusinessImpl(element)));
            });
            this._bookingBusinesses = bookingBusinessesArrValue;
        }
    };
    /**
     * Gets the bookingCurrencies property value. The bookingCurrencies property
     * @returns a BookingCurrencyInterface
     */
    public get bookingCurrencies() {
        return this._bookingCurrencies;
    };
    /**
     * Sets the bookingCurrencies property value. The bookingCurrencies property
     * @param value Value to set for the bookingCurrencies property.
     */
    public set bookingCurrencies(value: BookingCurrency[] | undefined) {
        if(value) {
            const bookingCurrenciesArrValue: BookingCurrencyImpl[] = [];
            this.bookingCurrencies?.forEach(element => {
                bookingCurrenciesArrValue.push((element instanceof BookingCurrencyImpl? element:new BookingCurrencyImpl(element)));
            });
            this._bookingCurrencies = bookingCurrenciesArrValue;
        }
    };
    /**
     * Instantiates a new SolutionsRoot and sets the default values.
     * @param solutionsRootParameterValue 
     */
    public constructor(solutionsRootParameterValue?: SolutionsRoot | undefined) {
        this._additionalData = solutionsRootParameterValue?.additionalData ? solutionsRootParameterValue?.additionalData! : {};
        this._bookingBusinesses = solutionsRootParameterValue?.bookingBusinesses;
        this._bookingCurrencies = solutionsRootParameterValue?.bookingCurrencies;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "bookingBusinesses": n => { this.bookingBusinesses = n.getCollectionOfObjectValues<BookingBusinessImpl>(createBookingBusinessFromDiscriminatorValue); },
            "bookingCurrencies": n => { this.bookingCurrencies = n.getCollectionOfObjectValues<BookingCurrencyImpl>(createBookingCurrencyFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.bookingBusinesses && this.bookingBusinesses.length != 0){        const bookingBusinessesArrValue: BookingBusinessImpl[] = [];
        this.bookingBusinesses?.forEach(element => {
            bookingBusinessesArrValue.push((element instanceof BookingBusinessImpl? element:new BookingBusinessImpl(element)));
        });
            writer.writeCollectionOfObjectValues<BookingBusinessImpl>("bookingBusinesses", bookingBusinessesArrValue);
        }
        if(this.bookingCurrencies && this.bookingCurrencies.length != 0){        const bookingCurrenciesArrValue: BookingCurrencyImpl[] = [];
        this.bookingCurrencies?.forEach(element => {
            bookingCurrenciesArrValue.push((element instanceof BookingCurrencyImpl? element:new BookingCurrencyImpl(element)));
        });
            writer.writeCollectionOfObjectValues<BookingCurrencyImpl>("bookingCurrencies", bookingCurrenciesArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
