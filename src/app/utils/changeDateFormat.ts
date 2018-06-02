export function changeFormat(date){
    let dates = date.split('-');
    let formatedDate = `${dates[2]}-${dates[1]}-${dates[0]}`;
    return formatedDate;
}