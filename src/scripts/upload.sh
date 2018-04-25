rm -f tmp/*
tar -cf tmp/latest.tar db build
aws s3 cp tmp/latest.tar s3://$AWS_BUCKET/latest.tar