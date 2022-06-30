import {createOutlookCategoryFromDiscriminatorValue} from './createOutlookCategoryFromDiscriminatorValue';
import {EntityImpl, OutlookCategoryImpl} from './index';
import {OutlookCategory} from './outlookCategory';
import {OutlookUser} from './outlookUser';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class OutlookUserImpl extends EntityImpl implements OutlookUser {
    /** A list of categories defined for the user. */
    private _masterCategories?: OutlookCategory[] | undefined;
    /**
     * Instantiates a new outlookUser and sets the default values.
     * @param outlookUserParameterValue 
     */
    public constructor(outlookUserParameterValue?: OutlookUser | undefined) {
        super(outlookUserParameterValue);
        this._masterCategories = outlookUserParameterValue?.masterCategories;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "masterCategories": n => { this.masterCategories = n.getCollectionOfObjectValues<OutlookCategoryImpl>(createOutlookCategoryFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the masterCategories property value. A list of categories defined for the user.
     * @returns a OutlookCategoryInterface
     */
    public get masterCategories() {
        return this._masterCategories;
    };
    /**
     * Sets the masterCategories property value. A list of categories defined for the user.
     * @param value Value to set for the masterCategories property.
     */
    public set masterCategories(value: OutlookCategory[] | undefined) {
        if(value) {
            const masterCategoriesArrValue: OutlookCategoryImpl[] = [];
            this.masterCategories?.forEach(element => {
                masterCategoriesArrValue.push((element instanceof OutlookCategoryImpl? element:new OutlookCategoryImpl(element)));
            });
            this._masterCategories = masterCategoriesArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.masterCategories && this.masterCategories.length != 0){        const masterCategoriesArrValue: OutlookCategoryImpl[] = [];
        this.masterCategories?.forEach(element => {
            masterCategoriesArrValue.push((element instanceof OutlookCategoryImpl? element:new OutlookCategoryImpl(element)));
        });
            writer.writeCollectionOfObjectValues<OutlookCategoryImpl>("masterCategories", masterCategoriesArrValue);
        }
    };
}
